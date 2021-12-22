const { Praticien } = require("../../db/modules");

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
};
module.exports = praticienController;
