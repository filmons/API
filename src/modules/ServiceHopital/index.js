import { jwtService } from "../../libs";
import ServiceDao from "./dao";
import ServiceRepository from "./repository";
import ServiceHopitalService from "./service";
import ServiceHopitalController from "./controller";
import ServiceHopitalRouter from "./router";

const userRepository = new ServiceRepository(ServiceDao);
const ServiceHopitalService = new ServiceHopitalService(userRepository);
const serviceHopitalController = new ServiceHopitalController(
  ServiceHopitalService,
  jwtService
);
const ServiceHopitalRouter = new ServiceHopitalRouter(serviceHopitalController);

export { ServiceHopitalRouter, ServiceDao };
