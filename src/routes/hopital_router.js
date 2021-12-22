const express = require("express");

const { OK, CREATED } = require("../helpers/status_codes");

const {
	getAllHopital,
	getHopital,
	addHoptal,
} = require("../controllers/hopital_controller");

const router = express.Router();

router.get("/", async (request, response) => {
	const hopitals = await getAllHopital();
	response.status(OK).json(hopitals);
});

module.exports = router;
