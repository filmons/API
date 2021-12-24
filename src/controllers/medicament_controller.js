const { Medicament } = require("../../db/modules");

const { BadRequestError, NotFoundError } = require("../helpers/errors");

const medicamentController = {
	getAllMedicament: async () => {
		const medicaments = await Medicament.findAll({
			order: [["nom", "ASC"]],
			attributes: { exclude: ["createdAt", "updatedAt, club_id"] },
			raw: true,
		});
		return medicaments;
	},
};

module.exports = medicamentController;
