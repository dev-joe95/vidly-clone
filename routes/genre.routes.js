const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
const express = require("express");
const router = express.Router()
const genre = require("../controllers/genre.controller")

router.get('/', genre.listAllGenres)
router.post('/', auth, genre.addGenre);
router.get('/:id', genre.listGenreById)
router.put('/:id', genre.updateGenre)
router.delete('/:id', [auth, admin], genre.deleteGenre);

module.exports = router