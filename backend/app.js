const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const mongoose = require("mongoose");
const {
  generateInitialCards,
  generateInitialUsers,
} = require("./initialData/initialDataService");
const router = require("./router/router");
const multer = require("multer");
const path = require("path");

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

/* async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/benzi-mangel");
  console.log("mongodb connection established on port 27017");
} */
/* main().catch((err) => console.log(err)); */
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: "GET,PUT,POST,DELETE",
    allowedHeaders: "Content-Type, Accept, Authorization",
  })
);

app.use(express.json());
app.use(router);

const PORT = 4000;

app.listen(PORT, async () => {
  console.log("Connection to server established on port 4000");
  await mongoose
    .connect("mongodb://127.0.0.1:27017/benzi-mangel")
    .then(() =>
      console.log("You have been connected to MongoDB Locally successfully!")
    );
  await generateInitialCards();
  await generateInitialUsers();
});

/* require("./handlers/users")(app); */
/* app.use(express.json());

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: "GET,PUT,POST,DELETE",
    allowedHeaders: "Content-Type, Accept, Authorization",
  })
);

app.listen(4000);

app.get("/user", (req, res, next) => {
  res.send({ name: "ayala" });
  setTimeout(() => console.log("kirshboim"), 2000);
});
app.post("/", (req, res, next) => {
  res.send([
    { name: user, age: 55 },
    { name: second, age: 3 },
  ]);
});
app.delete("/1", (req, res, next) => {
  res.send("user deleted");
});
app.put("/2", (req, res, next) => {
  res.send("user was update");
});

app.get("/", (req, res, next) => {
  res.status(404).send("not found");
});
 */
