const mongoose = require('mongoose')

const genre = new mongoose.Schema({
    name: { type: String, minlength: 5, maxlength: 20, required: true, trim: true }
})
const Genre = mongoose.model('Genre', genre);
module.exports = Genre;