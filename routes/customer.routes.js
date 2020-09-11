const express = require("express");
const router = express.Router();
const Customer = require("../controllers/customer.controller");

router.get("/", Customer.getAll);
router.post("/", Customer.create);
router.get("/:id", Customer.getById);
router.put("/:id", Customer.update);
router.delete("/:id", Customer.delete);
module.exports = router;
