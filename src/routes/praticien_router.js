const express = require("express");
const { OK, CREATED } = require("../helpers/status_codes");

const {
	getAllPraticin,
	getPraticien,
	addPraticien,
} = require("../controllers/praticien_controller");

const router = express.Router();

router.get("/", async (request, response) => {
	const praticien = await getAllPraticin();
	response.status(OK).json(praticien);
});

router.post("/signup", async (request, response) => {
	const userToAdd = request.body;
	

	const newpatient = await addPraticien(userToAdd);
	response.status(CREATED).json(newpatient);
});


module.exports = router;
