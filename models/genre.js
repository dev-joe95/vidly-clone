const mongoose = require('mongoose')

const genreSchema = new mongoose.Schema({
    name: { type: String, minlength: 4, maxlength: 50, required: true, trim: true }
})
const Genre = mongoose.model('Genre', genreSchema);

module.exports = genreSchema;
module.exports = Genre;