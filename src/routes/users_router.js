const express = require("express");

//const { OK, CREATED } = require("../helpers/status_codes");
const {
  getAllClubs,
  getClub,
  addClub,
} = require("../controllers/controllerUser");

const router = express.Router();

router.get("/", async (request, response) => {
  const users = await getAllClubs();
  response.status(OK).json(users);
});

// router.get("/:name", async (request, response) => {
//   const dj = await getClub(request.params.name);
//   response.status(OK).json(dj);
// });

// router.post("/", async (request, response) => {
//   const clubToAdd = request.body;

//   const newClub = await addClub(clubToAdd);
//   response.status(CREATED).json(newClub);
// });

module.exports = router;