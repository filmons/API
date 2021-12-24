const express = require("express");
const { OK, CREATED } = require("../helpers/status_codes");

const {
  getAllService,
  getService,
  addAservice,
} = require("../controllers/service_controller");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const services = await getAllService();
    response.status(OK).json(services);
  } catch (error) {
    response.status(error.status).json(error);
  }
});

module.exports = router;
