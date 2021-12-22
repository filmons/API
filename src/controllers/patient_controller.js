const { Patient } = require("../../db/modules");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secret = process.env.SECRET;
require("dotenv").config();

const { BadRequestError, NotFoundError} = require("../helpers/errors");

const userController = {
	getAllPatient: async () => {
		const patients = await Patient.findAll({
			order: [["nom", "ASC"]],
			attributes: { exclude: ["createdAt", "updatedAt"] },
			raw: true,
		});
		return patients;
		//return {pulet :"fifi"};//pour voir dans le table  Patients car il est vide
	},
	getPatientProfile: async (id) => {

        const user = await  Patient.findOne({
            where: {
                id
            },
        });
        if (!user) {
            return{ error: new  NotFoundError("Utilisateur non trouvé")};
        }
        return user;
    },

	add: async (data) => {
		const { email, password, nom, adresse, tele, prenom } = data;

		if ( !email || !password || !nom || !adresse ||  !prenom || !tele) {

			return {error : new BadRequestError(" veuillez remplir les champs")};
		}

		// Fields erors
		const utilisateurEmail = await Patient.findOne({
			where: {
				email,
			},
		});
		// const utilisateurPseudo = await patient.findOne({
		// 	where: {
		// 		email
		// 	}
		// });

		if (utilisateurEmail) {
			return {
				erro: new BadRequestError(
					"Un compte existe déjà avec cette adresse email. cliquer sur se connecter."
				),
			};
		}
		// if (utilisateurPseudo) {
		// 	return {error : new BadRequestError("Un compte existe déjà avec ce pseudo.")};
		// }

		// Hashage du mot de passe
		const salt = parseInt(process.env.SALT_ROUNDS);
		const hashedPassword = await bcrypt.hash(password, salt);
		// var base64Data = req.rawBody.replace(/^data:image\/png;base64,/, "");

		// require("fs").writeFile("out.png", base64Data, 'base64', function(err) {
		// });
		// Création du compte
		const newUser = await Patient.create({
			...data,
			// image:base64Data,
			password: hashedPassword,
		});
		return newUser;
	},

	login: async (data) => {
		const { email, password } = data;

		// Verification email
		const user = await Patient.findOne({
			where: {
				email,
			},
		});
		if (!user) {
			return { error: new BadRequestError("Cet utilisateur n'existe pas") };
		}

		// Verification mot de passe
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return { error: new BadRequestError("Mot de passe incorrect") };
		}

		const { id } = user;

		const token = jwt.sign({ id }, secret, { expiresIn: "24h" });

		return token;
	},
};
module.exports = userController;
