const express = require("express");
const { OK, CREATED } = require("../helpers/status_codes");

const {
  getAllPatient,
  // getPatient,
  add,
  login,
  getPatientProfile,
} = require("../controllers/patient_controller");

const router = express.Router();

router.get("/", async (request, response) => {
  const patient = await getAllPatient();
  response.status(OK).json(patient);
});

router.get("/:id", async (request, response) => {
  const patient = await getPatientProfile(request.params.id);
  response.status(OK).json(patient);
});

router.post("/signup", async (request, response) => {
  const userToAdd = request.body;
  const newpatient = await add(userToAdd);
  response.status(CREATED).json(newpatient);
});

router.post("/login", async (request, response) => {
  const userToAdd = request.body;
  try {
	  const newpatient = await login(userToAdd);
	  response.status(CREATED).json(newpatient);
  } catch (error) {
	  response.status(error.status).json(error);
  }
});

module.exports = router;
