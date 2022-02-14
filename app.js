import express from "express";
import Server from "./src/config/server.js";
import db from "./src/config/database.js";
import config from "./src/config/env.js";
import routes from "./src/modules/index.js";
import middlewares from "./src/middlewares/index.js";

const http = express();
const application = new Server(http, routes, middlewares);

(async () => {
  try {
    await db.associateAll(db.sequelize.models);
    await db.sequelize.sync({ alter: true });
    await application.listen(config.app_port);
  } catch (e) {
    console.error(e);
    logger.log("warn", e.message);
  }
})();
