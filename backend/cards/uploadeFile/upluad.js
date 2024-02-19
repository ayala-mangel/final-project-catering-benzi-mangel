/* const express = require("express");
const cors = require("cors");
const formidable = require("formidable");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("image"), (req, res) => {
  // Handle the uploaded file, for example, save the file path to a database
  const filePath = req.file.path;
  // Respond with a success message or appropriate data
  res.json({ success: true, message: "File uploaded successfully", filePath });
});
 */
