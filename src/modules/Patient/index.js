import { jwtService } from "../../libs/index.js";
import PatientDao from "./dao.js";
import PatientRepository from "./repository.js";
import PatientService from "./service.js";
import PatientController from "./controller.js";
import PatientRouter from "./router.js";

const patientRepository = new PatientRepository(PatientDao);
const patientService = new PatientService(patientRepository);
const patientController = new PatientController(patientService, jwtService);
const patientRouter = new PatientRouter(patientController);

export { patientRouter, PatientDao };
