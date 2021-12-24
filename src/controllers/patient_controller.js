const { Patient } = require("../../db/modules");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secret = process.env.SECRET;
require("dotenv").config();

const { BadRequestError, NotFoundError } = require("../helpers/errors");

const userController = {

	
  getAllPatient: async () => {
    const patients = await Patient.findAll({
      order: [["nom", "ASC"]],
      attributes: { exclude: ["createdAt", "updatedAt"] },
      raw: true,
    });
    return patients;
  },


  getPatientProfile: async (id) => {
    const user = await Patient.findOne({
      where: {
        id,
      },
    });
    if (!user) {
		throw new NotFoundError("Utilisateur non trouvé") ;
    }
    return user;
  },


  add: async (data) => {
    const { email, password, nom, adresse, tele, prenom } = data;
    if (!email || !password || !nom || !adresse || !prenom || !tele) {
		throw new BadRequestError(" veuillez remplir les champs");
    }
    const utilisateurEmail = await Patient.findOne({
      where: {
        email,
      },
    });
    
    if (utilisateurEmail) {
		throw new BadRequestError(
          "Un compte existe déjà avec cette adresse email. cliquer sur se connecter."
        );
    }

    const salt = parseInt(process.env.SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await Patient.create({
      ...data,
      password: hashedPassword,
    });
    return newUser;
  },


  login: async (data) => {
    const { email, password } = data;
    const user = await Patient.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      throw new BadRequestError("Cet utilisateur n'existe pas");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new BadRequestError("Mot de passe incorrect");
    }

    const { id } = user;
    const token = jwt.sign({ id }, secret, { expiresIn: "24h" });
    return { token, user };
  },
};
module.exports = userController;
