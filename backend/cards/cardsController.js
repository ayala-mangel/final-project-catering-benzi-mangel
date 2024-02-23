const { handleError } = require("../utils/handleErrors");
const normalizeCard = require("./normalizeCard");
const validateCard = require("../cards/joi/validateCard");
const Card = require("./card");

const getCards = async (req, res) => {
  try {
    const cards = await Card.find().sort({ createdAt: "descending" });
    return res.send(cards);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const getCard = (req, res) => {
  res.send({ message: "in getCard" });
};

const createCard = async (req, res) => {
  try {
    console.log("Incoming card data:", req.body);
    const card = req.body;
    const user = req.user;

    console.log("User:", user);

    if (!user.isAdmin)
      throw new Error(
        "You must be a admin type user in order to create a new card"
      );

    const { error } = validateCard(card);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

    let image = null;
    if (req.file) {
      image = req.file.path;
    }

    const normalizedCard = normalizeCard(card, user._id, image);

    const cardToDB = new Card(normalizedCard);
    const cardFromDB = await cardToDB.save();
    res.send(cardFromDB);
  } catch (error) {
    console.error("Error creating card:", error);
    return handleError(res, 500, {
      error: "Internal Server Error",
      details: error.message,
    });
  }
};

exports.getCards = getCards;
exports.getCard = getCard;
exports.createCard = createCard;
