import {patientRouter} from './Patient/index.js';
import {serviceHopitalRouter} from './ServiceHopital/index.js';

const routes = {
    '/patients': patientRouter,
    '/servicesHopital': serviceHopitalRouter
};

export default routes;