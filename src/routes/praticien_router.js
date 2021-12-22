const express = require("express");
const { OK, CREATED } = require("../helpers/status_codes");

const {
	getAllPraticin,
	getPraticien,
	addPraticin,
} = require("../controllers/praticien_controller");

const router = express.Router();

router.get("/", async (request, response) => {
	const praticien = await getAllPraticin();
	response.status(OK).json(praticien);
});

module.exports = router;
