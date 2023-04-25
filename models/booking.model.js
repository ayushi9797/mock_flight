const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: String,
  flight: String
})

const bookingModel = mongoose.model("bookings", bookingSchema);
module.exports = {
  bookingModel,
};
