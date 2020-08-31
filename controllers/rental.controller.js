const mongoose = require('mongoose');
const Fawn = require('fawn');
const Rental = require('../models/rental');
const Movie = require("../models/movie");
const Customer = require("../models/customer");

Fawn.init(mongoose)

exports.listAllRentals = async (req, res) => {
    await Rental.find({}, (err, rental) => {
        if (err) res.status(400).send(err);
        res.json(rental);
    }).sort('-dateOut')
};

exports.getRentalById = async (req, res) => {
    await Rental.findById(req.params.id, (err, rental) => {
        if (err) res.status(400).send(err);
        res.json(rental);
    })
};

exports.addRental = async (req, res) => {
    const newRental = new Rental(req.body);
    const customer = await Customer.findById(req.body.customerId);
    if (!customer) return res.status(400).send("Invalid customer.");
    const movie = await Movie.findById(req.body.movieId);
    if (!movie) return res.status(400).send("Invalid movie.");
    new Fawn.Task().save('rentals', newRental, (err, rental) => {
        if (err) res.status(500).send(err)
        res.json(rental)
    }).update('movies', { _id: movie._id }, { $inc: { numberInStock: -1 } }).run()
};

exports.updateRental = async (req, res) => {
    await Rental.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, rental) => {
        if (err) res.status(400).send(err);
        res.json(rental);
    })
};

exports.deleteRental = async (req, res) => {
    await Rental.findByIdAndRemove(req.params.id, (err) => {
        if (err) res.status(500).send(err);
        res.json({ message: "Successfully deleted" });
    })
};
