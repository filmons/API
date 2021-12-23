const express = require("express");

const { OK, CREATED } = require("../helpers/status_codes");

const {
	getAllHopital,
	addHospital,
	getOneHospital,
} = require("../controllers/hopital_controller");

const router = express.Router();

router.get("/", async (request, response) => {
	const hopitals = await getAllHopital();
	response.status(OK).json(hopitals);
});

router.get("/:id", async (request, response) => {
	const hopitals = await getOneHospital();
	response.status(OK).json(hopitals);
});

router.post("/", async (request, response) => {
	const HospitalToAdd = request.body;

	const newhopital = await addHospital(HospitalToAdd);
	response.status(CREATED).json(newhopital);
});

module.exports = router;
