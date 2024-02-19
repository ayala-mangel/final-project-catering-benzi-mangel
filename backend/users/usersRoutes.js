const express = require("express");
const router = express.Router();
const { register, login, signup } = require("./usersController");
const cors = require("cors");

router.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: "GET,PUT,POST,DELETE",
    allowedHeaders: "Content-Type, Accept, Authorization",
  })
);

router.post("/", register);
router.post("/login", login);
router.post("/signup", signup);

module.exports = router;
