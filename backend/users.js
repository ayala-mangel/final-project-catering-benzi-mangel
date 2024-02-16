module.exports = (app, mongoose) => {
  const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
  });
  const User = mongoose.model("users", schema);
};
