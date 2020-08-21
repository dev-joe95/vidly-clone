const express = require("express");
const router = express();
const genre = require("../controllers/genre.controller")

router.get('/', genre.listAllGenres)
router.post('/', genre.AddGenre);
router.get('/:id', genre.listGenreById)
router.put('/:id', genre.UpdateGenre)
router.delete('/:id', genre.deleteGenre);

module.exports = router