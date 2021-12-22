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
		//return {pulet :"fifi"};//pour voir dans le table clubs car il est vide
	},

	addPraticien: async (data) => {

		const { email, password, nom, adresse,  prenom,role } = data;

		if ( !email || !password || !nom || !adresse ||  !prenom || !role) {

			return {error : new BadRequestError("veuillez remplir les champs")};
		}

		// Fields erors
		console.log(data);

		const utilisateurEmail = await Praticien.findOne({
			where: {
				email,
				
			},
		});
		// const utilisateurData = await Praticien.findOne({
		// 	where: {
		// 		email,
		// 		password,
		// 		nom,
		// 		adresse, 
		// 		prenom,
		// 		role
		// 	}
		// });

		if (utilisateurEmail) {
			return {
				erro: new BadRequestError(
					"Un compte existe déjà avec cette adresse email. cliquer sur se connecter."
				),
			};
		}
		// if (utilisateurData == 0) {
		// 	return {error : new BadRequestError("peut pas etre vide")};
		// }

		// Hashage du mot de passe
		const salt = parseInt(process.env.SALT_ROUNDS);
		const hashedPassword = await bcrypt.hash(password, salt);
		// var base64Data = req.rawBody.replace(/^data:image\/png;base64,/, "");

		// require("fs").writeFile("out.png", base64Data, 'base64', function(err) {
		// });
		// Création du compte
		const newUser = await Praticien.create({
			...data,
			// image:base64Data,
			password: hashedPassword,
		});
		console.log(newUser);
		return newUser;
	},


};
module.exports = praticienController;
