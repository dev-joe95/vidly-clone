const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const express = require("express");
const router = express.Router();
const genre = require("../controllers/genre.controller");

router.get("/", genre.getAll);
router.post("/", auth, genre.create);
router.get("/:id", genre.getById);
router.put("/:id", genre.update);
router.delete("/:id", [auth, admin], genre.delete);

module.exports = router;
