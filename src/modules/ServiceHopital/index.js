import { jwtService } from "../../libs/index.js";
import ServiceHopitalDao from "./dao.js";
import ServiceHopitalRepository from "./repository.js";
import ServiceHopitalService from "./service.js";
import ServiceHopitalController from "./controller.js";
import ServiceHopitalRouter from "./router.js";

const serviceHopitalRepository = new ServiceHopitalRepository(ServiceHopitalDao);
const serviceHopitalService = new ServiceHopitalService(serviceHopitalRepository);
const serviceHopitalController = new ServiceHopitalController(serviceHopitalService,jwtService);
const serviceHopitalRouter = new ServiceHopitalRouter(serviceHopitalController);

export { serviceHopitalRouter, ServiceHopitalDao };
