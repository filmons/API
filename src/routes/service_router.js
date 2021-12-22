const express = require("express");
const { OK, CREATED } = require("../helpers/status_codes");

const {
	getAllService,
	getService,
	addAservice,
} = require("../controllers/service_controller");

const router = express.Router();

router.get("/", async (request, response) => {
	const services = await getAllService();
	response.status(OK).json(services);
});

module.exports = router;
