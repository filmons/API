const { Service } = require("../../db/modules");

const { BadRequestError, NotFoundError } = require("../helpers/errors");

const serviceController = {
	getAllService: async () => {
		const services = await Service.findAll({
			order: [["name", "ASC"]],
			attributes: { exclude: ["createdAt", "updatedAt, club_id"] },
			raw: true,
		});
		return services;
		//return {pulet :"fifi"};//pour voir dans le table clubs car il est vide
	},
};
module.exports = serviceController;
