const { generateBizNumber } = require("./generateBizNumber");

const normalizeCard = async (rawCard, userId) => {
  const image = {
    url:
      rawCard.image.url ||
      "https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_1280.jpg",
    alt: rawCard.image.alt || "food image",
  };

  return {
    ...rawCard,
    image,
    bizNumber: rawCard.bizNumber || (await generateBizNumber()),
    user_id: rawCard.user_id || userId,
    /* user_id: rawCard.user_id || userId, */
  };
};

module.exports = normalizeCard;
