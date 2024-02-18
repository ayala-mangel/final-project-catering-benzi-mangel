const jwt = require("jsonwebtoken");
const config = require("config");

const KEY = config.get("JWT_KEY");

const generateAuthToken = (user) => jwt.sign(user, KEY);

const verifyToken = (tokenFromClient) => jwt.verify(tokenFromClient, KEY);

exports.generateAuthToken = generateAuthToken;
exports.verifyToken = verifyToken;
