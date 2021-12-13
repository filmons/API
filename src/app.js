const express = require("express");
const db = require("../../MNES/db/modules");
const app = express();
const helmet = require("helmet");
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("./routes/index");

dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());

app.use("/api", cors());
app.use("/api", routes);





const port = Number(process.env.PORT);

// 404 error
app.all("*", (req, res, next) => {
	const err = new HttpException(404, "Endpoint Not Found");
	next(err);
	
});

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
