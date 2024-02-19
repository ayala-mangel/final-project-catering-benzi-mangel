const normalizeCard = require("../cards/normalizeCard");
const validateCard = require("../cards/joi/validateCard");
const Card = require("../cards/card");
const data = require("./initialData.json");
const registerValidation = require("../users/joi/registerValidation");
const normalizeUser = require("../users/normalizeUser");
const User = require("../users/User");

const generateInitialCards = async () => {
  const { cards } = data;
  const userId = "649d3238bac95e85fa0f0546";
  cards.forEach(async (card) => {
    try {
      console.log(card.title);
      const { error } = validateCard(card);
      if (error) throw new Error(`Joi Error: ${error.details[0].message}`);

      const normalizedCard = await normalizeCard(card, userId);
      const cardToDB = new Card(normalizedCard);
      await cardToDB.save();
      console.log(`Generate card '${card.title}' successfully`);
    } catch (error) {
      console.log(`Initial Data Generate Card Error: ${error.message}`);
    }
  });
};

const generateInitialUsers = async () => {
  const { users } = data;
  users.forEach(async (user) => {
    try {
      const { error } = registerValidation(user);
      if (error) throw new Error(`Joi Error: ${error.details[0].message}`);

      const { name, phone, email, password } = user;

      const normalizedUser = normalizeUser({ name, phone, email, password });

      const userForBD = new User(normalizedUser);
      await userForBD.save();
      console.log(`Generate User '${user.name}' successfully`);
    } catch (error) {
      console.log(`Initial Data Generate User Error: ${error.message}`);
    }
  });
};

exports.generateInitialCards = generateInitialCards;
exports.generateInitialUsers = generateInitialUsers;
