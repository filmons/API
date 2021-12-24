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
	},

	getOneHospital: async (id) => {
		console.log(id + "this");

		const hospital = await Hopital.findOne({
			where: {
				id
			},
		});

		if (!hospital) {
			throw  new NotFoundError("Utilisateur non trouvé");
		}
		return hospital;
	},

	addHospital: async (data) => {
		const { nom, adresse, tel } = data;
		console.log(data);

		if (!nom || !adresse || !tel) {
			throw new BadRequestError(" veuillez remplir les champs");
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
		return newallergene;
	},
};

module.exports = hopitalController;
