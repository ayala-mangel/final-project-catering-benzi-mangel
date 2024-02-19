const express = require("express");
const { getCards, getCard, createCard } = require("./cardsController");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", getCards);
router.get("/:cardId", getCard);
router.post("/", upload.single("image"), createCard);

module.exports = router;
