const { medicin } = require("./user");
//const { BadRequestError, NotFoundError } = require("../../src/helpers/error");


const usersController = {

    getAllUsers: async () => {
      const users = await medicin.findAll({
        order: [["name", "ASC"]],
        attributes: ["name"],
        raw: true,
      });
      //return users;
     return {pulet :"fifi"}; 
     ////pour voir dans le table clubs car il est vide 
    },

};

module.exports = usersController;