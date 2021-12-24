const express = require("express");
const { OK, CREATED } = require("../helpers/status_codes");

const {
  getAllAllergen,
  getAllergene,
  addAllergene,
} = require("../controllers/allergene_controer");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const allergens = await getAllAllergen();
    response.status(OK).json(allergens);
  } catch (error) {
    response.status(error.status).json(error);
  }
});

router.get("/:nom", async (request, response) => {
  try {
    const allergen = await getAllergene(request.params.nom);
    response.status(OK).json(allergen);
  } catch (error) {
    response.status(error.status).json(error);
  }
});

router.post("/", async (request, response) => {
  const allergenToAdd = request.body;
  try {
    const newallergene = await addAllergene(allergenToAdd);
    response.status(CREATED).json(newallergene);
  } catch (error) {
    response.status(error.status).json(error);
  }
});

module.exports = router;
