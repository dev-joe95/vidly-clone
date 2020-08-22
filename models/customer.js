const mongoose = require('mongoose')

const customer = new mongoose.Schema({
    name: { type: String, minlength: 5, maxlength: 20, required: true, trim: true },
    phone: { type: String, minlength: 12, maxlength: 12, required: true, trim: true },
    isGold: { type: Boolean, default: false }
})
const Customer = mongoose.model('Customer', customer);
module.exports = Customer;