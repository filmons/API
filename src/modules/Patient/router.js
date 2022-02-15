import { Router } from "express";
import { auth } from "../../middlewares/index.js";

class PatientRouter {
  constructor(controller) {
    this.router = Router();
    this.initializeRoutes(controller);
    return this.router;
  }

  initializeRoutes(controller) {
    this.router
      .route("/")
      .get(auth.isAuth, controller.getAll)
      .post(controller.register);

    this.router.route("/authenticate").post(controller.login);
  }
}

export default PatientRouter;
