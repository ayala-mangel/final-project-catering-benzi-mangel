const express = require("express");
const router = express.Router();
const { register, login, signup } = require("./usersController");
const cors = require("cors");
const multer = require("multer");

const storage = multer.memoryStorage(); // Use memory storage for simplicity
const upload = multer({ storage: storage });

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

router.post("/signup", upload.single("dishImage"), (req, res) => {
  // Access the uploaded file in req.file
  // Example: const dishImage = req.file.buffer;
  // Add logic to handle the image (save to disk, database, etc.)
  // Send a response to the client
  res.send({ message: "Image uploaded successfully" });
});

module.exports = router;
