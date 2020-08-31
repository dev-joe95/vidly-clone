const mongoose = require('mongoose')
const winston = require('winston')
const config = require("config");

module.exports = function () {
    const db = config.get('db')
    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => winston.info(`Successfully connected to ${db} ...`))

    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
}