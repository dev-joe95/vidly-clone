const express = require("express");
const router = express.Router();
const Customer = require("../controllers/customer.controller")

router.get('/', Customer.listAllCustomer)
router.post('/', Customer.addCustomer);
router.get('/:id', Customer.getCustomerById)
router.put('/:id', Customer.updateCustomer)
router.delete('/:id', Customer.deleteCustomer);
module.exports = router