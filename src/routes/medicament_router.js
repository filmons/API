const express = require("express");
const { OK, CREATED } = require("../helpers/status_codes");

const {
	getAllMedicament,
	getMedicament,
	addMedicament,
} = require("../controllers/medicament_controller");

const router = express.Router();

router.get("/", async (request, response) => {
	const medicaments = await getAllMedicament();
	response.status(OK).json(medicaments);
});

module.exports = router;
