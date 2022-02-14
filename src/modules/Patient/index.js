import { jwtService } from "../../libs";
import PatientDao from "./dao";
import PatientRepository from "./repository";
import PatientService from "./service";
import PatientController from "./controller";
import PatientRouter from "./router";

const patientRepository = new PatientRepository(PatientDao);
const patientService = new PatientService(patientRepository);
const patientController = new PatientController(patientService, jwtService);
const patientRouter = new PatientRouter(patientController);

export { patientRouter, PatientDao };
