const express = require("express");
const { OK, CREATED } = require("../helpers/status_codes");

const {
  getAllMedicament,
  getMedicament,
  addMedicament,
} = require("../controllers/medicament_controller");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const medicaments = await getAllMedicament();
    response.status(OK).json(medicaments);
  } catch (error) {
	response.status(error.status).json(error);
  }
});

module.exports = router;
