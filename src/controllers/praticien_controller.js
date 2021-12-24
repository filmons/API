const { Praticien } = require("../../db/modules");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secret = process.env.SECRET;
require("dotenv").config();

const { BadRequestError, NotFoundError } = require("../helpers/errors");

const praticienController = {
  getAllPraticin: async () => {
    const praticiens = await Praticien.findAll({
      order: [["nom", "ASC"]],
      attributes: { exclude: ["createdAt", "updatedAt, club_id"] },
      raw: true,
    });
    return praticiens;
  },

  addPraticien: async (data) => {
    const { email, password, nom, adresse, prenom, role } = data;

    if (!email || !password || !nom || !adresse || !prenom || !role) {
      throw new BadRequestError("veuillez remplir les champs");
    }
    console.log(data);

    const utilisateurEmail = await Praticien.findOne({
      where: {
        email,
      },
    });

    if (utilisateurEmail) {
      return {
        erro: new BadRequestError(
          "Un compte existe déjà avec cette adresse email. cliquer sur se connecter."
        ),
      };
    }

    // Hashage du mot de passe
    const salt = parseInt(process.env.SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await Praticien.create({
      ...data,
      password: hashedPassword,
    });
    console.log(newUser);
    return newUser;
  },
};
module.exports = praticienController;
