const express = require("express");
const { OK, CREATED } = require("../helpers/status_codes");

const {
	getAllAllergen,
	getAllergene,
	addAllergene,
} = require("../controllers/allergene_controer");

const router = express.Router();

router.get("/", async (request, response) => {
	const allergens = await getAllAllergen();
	response.status(OK).json(allergens);
});

router.get("/:nom", async (request, response) => {
	const allergen = await getAllergene(request.params.nom);
	response.status(OK).json(allergen);
});

router.post("/", async (request, response) => {
	const allergenToAdd = request.body;

	const newallergene = await addAllergene(allergenToAdd);
	response.status(CREATED).json(newallergene);
});

module.exports = router;
