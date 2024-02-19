const Joi = require("joi");

const REQUIRED_FIELD = Joi.string().min(2).max(256).required();
const NOT_REQUIRED = Joi.string().min(2).max(256).allow("");
/* const URL =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/; */

const message = (regex, message, required = true) => {
  if (required)
    return Joi.string()
      .ruleset.regex(regex)
      .rule({ message: message })
      .required();

  return Joi.string().ruleset.regex(regex).rule({ message: message }).allow("");
};

const validateCard = (card) => {
  const schema = Joi.object({
    title: REQUIRED_FIELD,
    description: Joi.string().min(2).max(1024).required(),
    price: Joi.number().required(),
    image: Joi.object()
      .keys({
        url: Joi.object().min(
          2
        ) /* message(URL, 'card.image "url" mast be a valid url', false) */,
        alt: NOT_REQUIRED,
      })
      .required(),
  });

  return schema.validate(card);
};

module.exports = validateCard;
