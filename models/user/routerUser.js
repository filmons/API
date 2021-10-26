const express = require("express");

const { getAllUsers, getUsers, addUsers } = require("./controllerUser");


const user = require("../user");

const router = express.Router();

router.get("/", async (request, response) => {
	const user = await getAllUsers();
	response.status(200).json(user);
});

module.exports = router;
