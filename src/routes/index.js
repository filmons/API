const express = require("express");


// const djsRouter = require("./djs_router");
// const musicalGenresRouter = require("./musicalgenres_router");
const userRouter = require("./users_router");

const mainRouter = express.Router();

// mainRouter.use("/djs", djsRouter);
// mainRouter.use("/musicalgenres", musicalGenresRouter);
mainRouter.use("/user", userRouter);

module.exports = mainRouter;