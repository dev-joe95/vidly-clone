const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const config = require('config')

const userSchema = new mongoose.Schema({
    name: { type: String, minlength: 4, maxlength: 50, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] },
    password: { type: String, required: true, trim: true, minlength: 8, maxlength: 1024 },
    isboolean: Boolean
})

userSchema.methods.generateToken = function () {
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin },/* config.get('jwtPrivateKey')  */'jwtPrivateKey');
    return token;
}
const User = mongoose.model('User', userSchema);

module.exports = userSchema;
module.exports = User;