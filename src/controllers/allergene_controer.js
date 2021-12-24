const { Allergene } = require("../../db/modules");
const { NotFoundError, BadRequestError } = require("../helpers/errors");

const allergenController = {
	getAllAllergen: async () => {
		const allernens = await Allergene.findAll({
			order: [["nom", "ASC"]],

			attributes: { exclude: ["createdAt", "updatedAt, club_id"] },

			raw: true,
		});
		return allernens;
	},

	getAllergene: async (nom) => {
		const allergene = await Allergene.findAll({
			where: {
				nom,
			},
			attributes: ["id", "nom", "code"],
		});

		if (!allergene) {
			throw new NotFoundError(
				"Ressource introuvable",
				"Ce Allergene n'existe pas"
			);
		}
		return allergene;
	},

	addAllergene: async (data) => {
		const { nom, code } = data;
		console.log(data);
		const allergene = await Allergene.findOne({
			where: {
				nom,
				code,
			},
		});
		if (allergene) {
			throw new BadRequestError(
				"Ressource existante",
				"Le Allergene existe déjà"
			);
		}
		const newallergene = await Allergene.create({ nom, code });
		return newallergene;
	},
};

module.exports = allergenController;
