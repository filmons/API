// import {getConnectionManager} from "typeorm";
import { ServiceHopital } from '../modules/ServiceHopital/entity';
import { Patient } from '../modules/Patient/entity';

const entities = [Patient, ServiceHopital];

const connectionManager = getConnectionManager();
const db = connectionManager.create({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "bookstore",
    logging: true,
    synchronize: true,
    entities: entities
});

export default db;