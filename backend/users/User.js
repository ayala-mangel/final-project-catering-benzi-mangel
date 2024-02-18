const mongoose = require("mongoose");

/* const DEFAULT_VALIDATION = {
  type: String,
  required: true,
  minLength: 2,
  maxLength: 256,
  trim: true,
  lowercase: true,
}; */

/* const URL_VALIDATION = {
  type: String,
  match: RegExp(
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
  ),
  trim: true,
  lowercase: true,
}; */

/* const Name = new mongoose.Schema({
  first: DEFAULT_VALIDATION,
}); */

/* const Image = new mongoose.Schema({
  url: URL_VALIDATION,
  alt: DEFAULT_VALIDATION,
}); */

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 256,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    match: RegExp(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/),
  },
  email: {
    type: String,
    required: true,
    match: RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),
    lowercase: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  /* image: Image, */
  isAdmin: { type: Boolean, default: false },
  /* isClient: { type: Boolean, default: false }, */
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", schema);

module.exports = User;
