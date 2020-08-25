const express = require("express");
const router = express.Router();
const Rental = require("../controllers/rental.controller")

router.get('/', Rental.listAllRentals)
router.post('/', Rental.addRental);
router.get('/:id', Rental.getRentalById)
router.put('/:id', Rental.updateRental)
router.delete('/:id', Rental.deleteRental);
module.exports = router