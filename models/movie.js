const mongoose = require("mongoose");
const genreSchema = require("./genre").Schema
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 1,
        maxlength: 255,
        required: true,
        trim: true,
    },
    genre: {
        type: [genreSchema] /* new mongoose.Schema({
            name: { type: String, minlength: 4, maxlength: 50, required: true, trim: true }
        }) */, required: true
    },
    numberInStock: { type: Number, required: true },
    dailyRentalRate: { type: Number },
});
const Movie = mongoose.model("Movie", movieSchema);

module.exports = movieSchema;
module.exports = Movie;
