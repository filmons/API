const { Hopital } = require("../../db/modules");

const { BadRequestError, NotFoundError } = require("../helpers/errors");

const hopitalController = {
	getAllHopital: async () => {
		const hopitals = await Hopital.findAll({
			order: [["nom", "ASC"]],
			attributes: { exclude: ["createdAt", "updatedAt"] },
			raw: true,
		});
		return hopitals;
		//return {pulet :"fifi"};//pour voir dans le table clubs car il est vide
	},

	getOneHospital: async (id) => {
		console.log(id + "this");

		const hospital = await Hopital.findOne({
			where: {
				id
			},
		});

		if (!hospital) {
			return { error: new NotFoundError("Utilisateur non trouvé") };
		}
		return hospital;
	},

	addHospital: async (data) => {
		const { nom, adresse, tel } = data;
		console.log(data);

		if (!nom || !adresse || !tel) {
			return { error: new BadRequestError(" veuillez remplir les champs") };
		}

		const hospital = await Hopital.findOne({
			where: {
				nom,
				tel,
				adresse,
			},
		});
		if (hospital) {
			return {
				erro: new BadRequestError(
					"Ressource existante",
					"Le Allergene existe déjà"
				),
			};
		}
		const newallergene = await Hopital.create({ nom, adresse, tel });
		//console.log(newallergene + "here is new allergene");

		return newallergene;
	},
};

module.exports = hopitalController;
