const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();
const Rental = require("../controllers/rental.controller");

router.get("/", Rental.getAll);
router.post("/", auth, Rental.create);
router.get("/:id", Rental.getById);
router.put("/:id", Rental.update);
router.delete("/:id", Rental.delete);
module.exports = router;
