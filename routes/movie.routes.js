const auth = require('../middleware/auth')
const express = require("express");
const router = express.Router();
const Movie = require("../controllers/movie.controller")

router.get('/', auth, Movie.listAllMovies)
router.post('/', Movie.addMovie);
router.get('/:id', Movie.getMovieById)
router.put('/:id', Movie.updateMovie)
router.delete('/:id', Movie.deleteMovie);
module.exports = router