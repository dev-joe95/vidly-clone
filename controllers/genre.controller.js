const mongoose = require("mongoose");
const Genre = require("../models/genre");

exports.getAll = async (req, res) => {
    await Genre.find({}, (err, genre) => {
        if (err) res.status(400).send(err);
        res.json(genre);
    }).sort("name");
};

exports.getById = async (req, res) => {
    await Genre.findById(req.params.id, (err, genre) => {
        if (err) res.status(400).send(err);
        res.json(genre);
    });
};

exports.create = async (req, res) => {
    const newGenre = new Genre(req.body);
    await newGenre.save((err, genre) => {
        if (err) res.status(500).send(err);
        res.json(genre);
    });
};

exports.delete = async (req, res) => {
    await Genre.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, genre) => {
            if (err) res.status(400).send(err);
            res.json(genre);
        }
    );
};

exports.deleteGenre = async (req, res) => {
    await Genre.findByIdAndRemove(req.params.id, (err, genre) => {
        if (err) res.status(500).send(err);
        res.json({ message: "Successfully deleted" });
    });
};
