const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { bookingModel } = require("../models/booking.model");
const app = express();

const bookingRouter = express.Router();
bookingRouter.use(express.json());

//Get booking


bookingRouter.get("/api/dashboard", async (req, res) => {
    try {
      let data = await bookingModel.find();
      console.log(data);
      console.log("Here you Get your All bookings");
      res.status(200).send(data);
    } catch (error) {
      res.status(404).send(`error in gettibg the booking`);
      console.log({ error: `error: ${error.message}` });
    }
  });


//Create booking

bookingRouter.post("/api/booking", async (req, res) => {
    try {
      let booking = req.body;
      console.log(booking);
      let data = new bookingModel(booking);
      await data.save();
      console.log(data);
      console.log("Add your new booking Thank you");
      res.status(201).send(data);
    } catch (error) {
      res.status(404).send(`error in adding the booking`);
      console.log({ error: `error: ${error.message}` });
    }
  });





module.exports = {
    bookingRouter
}
