const { generateAuthToken } = require("../auth/jwt");
const { handleError } = require("../utils/handleErrors");
const { comparePassword } = require("./bcrypt");
const normalizeUser = require("./normalizeUser");
const loginValidation = require("./joi/loginValidation");
const signupValidation = require("./joi/signupValidation");
const registerValidation = require("./joi/registerValidation");
const User = require("./User");

const register = async (req, res) => {
  try {
    const user = req.body;
    const { email } = user;

    const { error } = registerValidation(user);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

    const isUserExistInDB = await User.findOne({ email });
    if (isUserExistInDB) throw new Error("User already registered");

    const normalizedUser = normalizeUser(user);

    const userForDB = new User(normalizedUser);
    const userFromDB = await userForDB.save();
    res.send(userFromDB);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const login = async (req, res) => {
  try {
    const user = req.body;
    const { email } = user;
    const { error } = loginValidation(user);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

    const userInDb = await User.findOne({ email });
    if (!userInDb)
      throw new Error("Authentication Error: Invalid email or password");

    const isPasswordValid = comparePassword(user.password, userInDb.password);
    if (!isPasswordValid)
      throw new Error("Authentication Error: Invalid email or password");

    const { _id, /* isClient, */ isAdmin } = userInDb;
    const token = generateAuthToken({ _id, /* isClient, */ isAdmin });

    res.send(token);
  } catch (error) {
    const isAuthError =
      error.message === "Authentication Error: Invalid email or password";

    return handleError(
      res,
      isAuthError ? 403 : 500,
      `Mongoose Error: ${error.message}`
    );
  }
};
const signup = async (req, res) => {
  try {
    const user = req.body;
    const { name, phone, email, password, createdAt } = user;
    const { error } = signupValidation(user);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

    const normalizedUser = normalizeUser(user);

    const userForDB = new User(normalizedUser);
    const userFromDB = await userForDB.save();
    res.send(userFromDB);
    // await new User(user).save();
    //const newUser = await user.save();

    //   const { _id, /* isClient, */ isAdmin } = userInDb;
    // const token = generateAuthToken({ _id, /* isClient, */ isAdmin });
    /*   res
      .status(200)
      .send({ message: `user ${name} has been created successfully` }); */
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

exports.register = register;
exports.login = login;
exports.signup = signup;
