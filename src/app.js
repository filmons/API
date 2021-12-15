const express = require("express");
const db = require("../../MNES/db/modules/index");
const app = express();
const helmet = require("helmet");
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("./routes/index");
const { notFoundHandler, errorLogger, errorHandler} = require ("./middlewares");
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());

app.use("/api", cors());
app.use("/api", routes);

app.use("*", notFoundHandler);
app.use(errorLogger);
app.use(errorHandler);




const port = Number(process.env.PORT);


app.listen(port, async () => {
	console.debug(`Server is listening on port ${port}`);
	//console.debug(`Current environment is ${env});
	db.sequelize.sync({ alter: true }, () => {
	  console.log("db on");
	});
  });
/*db.sequelize.sync().then(() => {
	app.listen(port, () => {
		console.log(`Example app listening at http://localhost:${port}`);
	});
});*/
