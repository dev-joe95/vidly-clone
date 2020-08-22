const express = require("express");
const router = express();
const Customer = require("../controllers/customer.controller")

router.get('/', Customer.listAllCustomer)
router.post('/', Customer.AddCustomer);
router.get('/:id', Customer.getCustomerById)
router.put('/:id', Customer.UpdateCustomer)
router.delete('/:id', Customer.deleteCustomer);
module.exports = router