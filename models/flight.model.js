const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  airline: String,
  flightNo: String,
  departure: String,
  arrival: String,
  departureTime: Date,
  arrivalTime: Date,
  seats: Number,
  price: Number,
});

const flightModel = mongoose.model("flights", flightSchema);
module.exports = {
  flightModel,
};


// {
//     " airline": "Ayushi airways",
//     "flightNo": "8080",
//     "departure": "Goa",
//    " arrival": "England",
//     "departureTime": "09-20-08",
//     "arrivalTime":"09-20-00",
//     "seats": 3,
//     "price":50000
//   }