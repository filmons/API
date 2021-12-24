const express = require("express");

const { OK, CREATED } = require("../helpers/status_codes");

const {
  getAllHopital,
  addHospital,
  getOneHospital,
} = require("../controllers/hopital_controller");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const hopitals = await getAllHopital();
    response.status(OK).json(hopitals);
  } catch {
    response.status(error.status).json(error);
  }
});

router.get("/:id", async (request, response) => {
  try {
    const hopitals = await getOneHospital();
    response.status(OK).json(hopitals);
  } catch {
    response.status(error.status).json(error);
  }
});

router.post("/", async (request, response) => {
  const HospitalToAdd = request.body;
  try {
    const newhopital = await addHospital(HospitalToAdd);
	response.status(CREATED).json(newhopital);
  } catch {
    response.status(error.status).json(error);
  }
});

module.exports = router;
