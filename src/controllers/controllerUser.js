const { User } = require("../../db/modules/user");
//const { BadRequestError, NotFoundError } = require("../../src/helpers/error");

const usersController = {
	getAllUsers: async () => {
		
		const users = await User.findAll({
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
