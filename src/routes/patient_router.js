const express = require("express");
const { OK, CREATED } = require("../helpers/status_codes");

const {
	getAllPatient,
	getPatient,
	add,

} = require("../controllers/patient_controller");

const router = express.Router();

router.get("/", async (request, response) => {
	const patient = await getAllPatient();
	response.status(OK).json(patient);
});

router.get("/:nom", async (request, response) => {
	const patient = await getPatient(request.params.nom);
	response.status(OK).json(patient);
});

router.post("/", async (request, response) => {
	const userToAdd = request.body;

	const newpatient = await add(userToAdd);
	response.status(CREATED).json(newpatient);
});

module.exports = router;

			