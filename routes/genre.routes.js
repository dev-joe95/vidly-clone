const express = require("express");
const router = express.Router()
const genre = require("../controllers/genre.controller")

router.get('/', genre.listAllGenres)
router.post('/', genre.addGenre);
router.get('/:id', genre.listGenreById)
router.put('/:id', genre.updateGenre)
router.delete('/:id', genre.deleteGenre);

module.exports = router