const mongoose = require("mongoose");

const URL_REGEX =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

const DEFAULT_VALIDATION = {
  type: String,
  trim: true,
  minLength: 2,
  maxLength: 256,
  lowercase: true,
  required: true,
};

const regexType = (regex, required = true, unique = false) => {
  return {
    type: String,
    required,
    match: RegExp(regex),
    unique,
    trim: true,
  };
};

const imageSchema = new mongoose.Schema({
  url: regexType(URL_REGEX),
  alt: DEFAULT_VALIDATION,
});

const schema = new mongoose.Schema({
  title: DEFAULT_VALIDATION,
  description: {
    type: String,
    trim: true,
    minLength: 2,
    maxLength: 1024,
    lowercase: true,
    required: true,
  },
  price: regexType(/[0-9]/),
  image: imageSchema,
  /* likes: [String], */
  /* createdAt: {
    type: Date,
    default: Date.now,
  }, */
  /* user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  }, */
});

const Card = mongoose.model("card", schema);

module.exports = Card;
