const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model("users", userSchema);
module.exports = {
  UserModel,
};


// {
//     "name": "ayushi",
//     "email": "ayu12@gmail.com",
//     "password": "1234"
//   }