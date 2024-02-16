const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/benzi-mangel");
  console.log("mongodb connection established on port 27017");
}
main().catch((err) => console.log(err));

app.use(express.json());

pp.use(
  cors({
    origin: true,
    credentials: true,
    methods: "GET,PUT,POST,DELETE",
    allowedHeaders: "Content-Type, Accept, Authorization",
  })
);

app.listen(4000, () => {
  console.log("Connection to server established on port 4000");
});

require("./handlers/users")(app);
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
