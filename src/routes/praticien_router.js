const express = require("express");
const { OK, CREATED } = require("../helpers/status_codes");

const {
  getAllPraticin,
  getPraticien,
  addPraticien,
} = require("../controllers/praticien_controller");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const praticien = await getAllPraticin();
    response.status(OK).json(praticien);
  } catch (error) {
    response.status(error.status).json(error);
  }
});

router.post("/signup", async (request, response) => {
  const praticienToAdd = request.body;
  try {
    const newpraticien = await addPraticien(praticienToAdd);
    response.status(CREATED).json(newpraticien);
  } catch (error) {
    response.status(error.status).json(error);
  }
});

module.exports = router;
