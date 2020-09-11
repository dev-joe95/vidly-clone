const mongoose = require("mongoose");
const Customer = require("../models/customer");

exports.getAll = async (req, res) => {
    await Customer.find({}, (err, customer) => {
        if (err) res.status(400).send(err);
        res.json(customer);
    }).sort("name");
};

exports.getById = async (req, res) => {
    await Customer.findById(req.params.id, (err, customer) => {
        if (err) res.status(400).send(err);
        res.json(customer);
    });
};

exports.create = async (req, res) => {
    const newCustomer = new Customer(req.body);
    await newCustomer.save((err, customer) => {
        if (err) res.status(500).send(err);
        res.json(customer);
    });
};

exports.update = async (req, res) => {
    await Customer.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, customer) => {
            if (err) res.status(400).send(err);
            res.json(customer);
        }
    );
};

exports.delete = async (req, res) => {
    await Customer.findByIdAndRemove(req.params.id, (err) => {
        if (err) res.status(500).send(err);
        res.json({ message: "Successfully deleted" });
    });
};
