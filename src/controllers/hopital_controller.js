const { Hopital } = require("../../db/modules");

const { BadRequestError, NotFoundError } = require("../helpers/errors");

const hopitalController = {
	getAllHopital: async () => {
		const hopitals = await Hopital.findAll({
			order: [["nom", "ASC"]],
			attributes: { exclude: ["createdAt", "updatedAt, club_id"] },
			raw: true,
		});
		return hopitals;
		//return {pulet :"fifi"};//pour voir dans le table clubs car il est vide
	},
};

module.exports = hopitalController;
