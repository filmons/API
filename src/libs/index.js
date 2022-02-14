// config
import config from "../config/env.js";

// services
import JwtService from "./jwt.js";

// services dependencies

import jwt from "jsonwebtoken";

// Instanciate all your singleton service with dépendencies injection
const mailerService = new MailerService(nodemailer);
const jwtService = new JwtService(jwt, config.jwt_secret);

// export all the libs services
export { jwtService };
