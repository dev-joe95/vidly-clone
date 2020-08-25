const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name: { type: String, minlength: 3, maxlength: 255, required: true, trim: true },
    phone: { type: String, minlength: 12, maxlength: 12, required: true, trim: true },
    isGold: { type: Boolean, default: false }
})
const Customer = mongoose.model('Customer', customerSchema);

module.exports = customerSchema
module.exports = Customer;