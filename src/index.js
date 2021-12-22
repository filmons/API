// const express = require("express");



// const app = require("./app");


// const port = Number(process.env.PORT);

// // 404 error
// app.all("*", (req, res, next) => {
// 	const err = new HttpException(404, "Endpoint Not Found");
// 	next(err);
	
// });

// app.listen(port, async () => {
// 	console.debug(`Server is listening on port ${port}`);
// 	//console.debug(`Current environment is ${env});
// 	db.sequelize.sync({ alter: true }, () => {
// 	  console.log("db on");
// 	});
//   });
// /*db.sequelize.sync().then(() => {
// 	app.listen(port, () => {
// 		console.log(`Example app listening at http://localhost:${port}`);
// 	});
// });*/