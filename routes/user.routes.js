const auth = require('../middleware/auth')
const express = require("express");
const router = express.Router();
const User = require("../controllers/user.controller")

router.get('/me', auth, User.getCurrentUser);
router.post('/', User.register);

module.exports = router