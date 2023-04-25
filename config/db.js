const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(process.env.mongo_url);
console.log(`connected to  mongo database successfully.`);
module.exports = {
  connection,
};
