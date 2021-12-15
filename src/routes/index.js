const express = require("express");


const allergineRouter   = require("./allergine_router");
const hopitalRouter     = require("./hopital_router");
const medicamentRouter  = require("./medicament_router");
const praticienRouter   = require("./praticien_router");
const serviceRouter     = require("./service_router")
const patientRouter     = require("./patient_router");

const mainRouter = express.Router();

mainRouter.use("/allergien", allergineRouter);
mainRouter.use("/hopital", hopitalRouter);
mainRouter.use("/medicament", medicamentRouter);
mainRouter.use("/praticien", praticienRouter);
mainRouter.use("/service", serviceRouter);
mainRouter.use("/patient", patientRouter);

module.exports = mainRouter;