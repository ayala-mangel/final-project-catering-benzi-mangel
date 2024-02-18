const express = require("express");
const router = express.Router();
const { register, login, signup } = require("./usersController");

router.post("/", register);
router.post("/login", login);
router.post("/signup", signup);

module.exports = router;
