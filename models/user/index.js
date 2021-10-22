const express = require("express");
const usersRouter = require("./routerUser");

const mainRouter = express.Router();

mainRouter.use("/medicin", usersRouter);

module.exports = mainRouter;
