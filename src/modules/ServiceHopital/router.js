import { Router } from "express";
import { auth } from "../../middlewares/index.js";

class ServiceHopitalRouter {
  constructor(controller) {
    this.router = Router();
    this.initializeRoutes(controller);
    return this.router;
  }

  initializeRoutes(controller) {
    this.router.route("/").get(auth.isAuth, controller.getAll);
  }
}

export default ServiceHopitalRouter;
