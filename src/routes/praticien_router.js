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
	const praticienToAdd = request.body;
	

	const newpraticien = await addPraticien(praticienToAdd);
	response.status(CREATED).json(newpraticien);
});


module.exports = router;
