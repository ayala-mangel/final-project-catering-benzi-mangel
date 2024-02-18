const { generateUserPassword } = require("./bcrypt");

const normalizeUser = (rawUser) => {
  const { name, phone, email, password } = rawUser;
  //const name = { ...(rawUser.name || "") };

  /*  const image = {
    ...rawUser.image,
    url:
      rawUser.image.url ||
      "https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png",
    alt: rawUser.image.alt || "User image",
  }; */

  const user = {
    ...rawUser,
    name: name.toString(),
    password: generateUserPassword(password),
  };

  return user;
};

module.exports = normalizeUser;
