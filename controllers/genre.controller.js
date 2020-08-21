const mongoose = require('mongoose');
const Genre = require('../models/genre');

exports.listAllGenres = async (req, res) => {
    await Genre.find({}, (err, genre) => {
        if (err) res.send(err);
        res.json(genre);
    })
};

exports.listGenreById = async (req, res) => {
    // return genres.find((g) => g.id === req.params.id);
};

exports.AddGenre = async (req, res) => {
    const newGenre = new Genre(req.body);
    await newGenre.save((err, genre) => {
        if (err => res.send(err))
            res.json(genre);
    });
};

exports.UpdateGenre = async (req, res) => {
    await Genre.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, genre) => {
        if (err) res.send(err);
        res.json(genre);
    })
};

exports.deleteGenre = async (req, res) => {
    await Genre.findByIdAndRemove(req.params.id, (err, genre) => {
        if (err) res.send(err);
        res.json({ message: "Successfully deleted" });
    })
};
