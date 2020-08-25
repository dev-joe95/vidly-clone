const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema({
    customer: {
        type: 
        new mongoose.Schema({
            name: { type: String, minlength: 3, maxlength: 255, required: true, trim: true },
            phone: { type: String, minlength: 12, maxlength: 12, required: true, trim: true },
            isGold: { type: Boolean, default: false }
        }), required: true,
    },
    movie: {
        type:
        new mongoose.Schema({
            title: {
                type: String,
                minlength: 1,
                maxlength: 255,
                required: true,
                trim: true,
            },
            dailyRentalRate: { type: Number },
        }),
        required: true,
    },
    dateOut: {
        type: Date,
        required: true,
        default: Date.now,
    },
    dateReturned: {
        type: Date,
        required: true,
    },
    rentalFee: { type: Number, min: 0 },
});
const Rental = mongoose.model("Rental", rentalSchema);
module.exports = Rental;
