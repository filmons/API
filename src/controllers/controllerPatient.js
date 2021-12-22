// const { Patient } = require("../../db/modules");

// const { BadRequestError, NotFoundError } = require("../helpers/errors");

// const usersController = {
// 	getAllPatient: async () => {
// 		const patients = await Patient.findAll({
// 			order: [["nom", "ASC"]],
// 			attributes: { exclude: ["createdAt", "updatedAt, club_id"] },
// 			raw: true,
// 		});
// 		return patients;
// 		//return {pulet :"fifi"};//pour voir dans le table clubs car il est vide
// 	},

// 	getPatient: async (nom) => {
// 		const patient = await Patient.findOne({
// 			where: {
// 				nom,
// 			},
// 			attributes: ["id", "nom", "prénom", "email", "adresse", "tele"],
// 		});
// 		if (!patient) {
// 			throw new NotFoundError(
// 				"Ressource introuvable",
// 				"Ce Patient n'existe pas"
// 			);
// 		}
// 		return patient;
// 	},
// 	addPatient: async (data) => {
// 		const { nom, prénom, email, adresse, tele } = data;
// 		console.log(data);
// 		const patient = await Patient.findOne({
// 			where: {
// 				nom,
// 			},
// 		});
// 		if (patient) {
// 			throw new BadRequestError(
// 				"Ressource existante",
// 				"Le Patient existe déjà"
// 			);
// 		}
// 		const newpatient = await Patient.create({
// 			nom,
// 			prénom,
// 			email,
// 			adresse,
// 			tele,
// 		});

// 		return newpatient;
// 	},
// };

// module.exports = usersController;
