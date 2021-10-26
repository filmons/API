const { medicin } = require("../");
//const { BadRequestError, NotFoundError } = require("../../src/helpers/error");

const usersController = {
	getAllUsers: async () => {
		console.log(medicin);
		const users = await medicin.findAll({
			// order: [["firstName", "ASC"]],
			//  attributes: ["firstName"],
			raw: true,
		});
		return users;
		//return {pulet :"fifi"};
		////pour voir dans le table clubs car il est vide
	},
};

module.exports = usersController;
