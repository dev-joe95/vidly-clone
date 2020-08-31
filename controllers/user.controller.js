const _ = require('lodash');
const bcrypt = require('bcrypt')
const mongoose = require('mongoose');
const User = require('../models/user');

exports.getCurrentUser = async (req, res) => {
    const user = await User.findById(req.users._id)
        .select('-password')

    res.send(user);
};

exports.register = async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already exist")
    const newUser = new User(req.body);
    const salt = await bcrypt.genSalt(10)
    newUser.password = await bcrypt.hash(newUser.password, salt)
    await newUser.save((err, user) => {
        if (err) res.status(500).send(err)
        const token = user.generateToken()
        res.header('x-auth-token', token).json(_.pick(user, ['_id', 'name', 'email']));
    });
};

exports.login = async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("User did not registerInvalid email or password");
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(400).send("User did not registerInvalid email or password");

    const token = user.generateToken()
    res.send(token)
};
