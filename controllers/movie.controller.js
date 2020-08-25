const mongoose = require('mongoose');
const Movie = require('../models/movie');
const Genre = require("../models/genre");
exports.listAllMovies = async (req, res) => {
    await Movie.find({}, (err, movie) => {
        if (err) res.status(400).send(err);
        res.json(movie);
    }).sort('name')
};

exports.getMovieById = async (req, res) => {
    await Movie.findById(req.params.id, (err, movie) => {
        if (err) res.status(400).send(err);
        res.json(movie);
    })
};

exports.addMovie = async (req, res) => {
    const newMovie = new Movie(req.body);
    const genre = await Genre.findById(req.body.genreId);
    await newMovie.save((err, movie) => {
        if (err) res.status(404).send(err)
        res.json(movie);
    });
};

exports.updateMovie = async (req, res) => {
    await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, movie) => {
        if (err) res.status(400).send(err);
        res.json(movie);
    })
};

exports.deleteMovie = async (req, res) => {
    await Movie.findByIdAndRemove(req.params.id, (err) => {
        if (err) res.status(404).send(err);
        res.json({ message: "Successfully deleted" });
    })
};
