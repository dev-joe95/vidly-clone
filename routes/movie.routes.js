const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();
const Movie = require("../controllers/movie.controller");

router.get("/", Movie.getAll);
router.post("/", auth, Movie.create);
router.get("/:id", Movie.getById);
router.put("/:id", Movie.update);
router.delete("/:id", Movie.delete);
module.exports = router;
