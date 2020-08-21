const mongoose = require('mongoose')

const genre = new mongoose.Schema({
    name: { type:String, min: 5, max: 20, required: true, trim: true }
})
const Genre = mongoose.model('Genre', genre);
module.exports = Genre;