const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { flightModel } = require("../models/flight.model");
const app = express();

const flightRouter = express.Router();
flightRouter.use(express.json());

//Get all flight

flightRouter.get("/api/flights", async (req, res) => {
  try {
    let data = await flightModel.find();
    console.log(data);
    console.log("Here you Get your All flights");
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(`error in gettibg the flight`);
    console.log({ error: `error: ${error.message}` });
  }
});

//Get by id

flightRouter.get("/api/flights/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let data = await flightModel.findById(id);
    console.log(data);
    console.log("Here you Get your  flights");
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(`error in gettibg the flight`);
    console.log({ error: `error: ${error.message}` });
  }
});

//Create flight

flightRouter.post("/api/flights", async (req, res) => {
  try {
    let flight = req.body;
    console.log(flight);
    let data = new flightModel(flight);
    await data.save();
    console.log(data);
    console.log("Add your new flight Thank you");
    res.status(201).send(data);
  } catch (error) {
    res.status(404).send(`error in adding the flight`);
    console.log({ error: `error: ${error.message}` });
  }
});

//Update flight

flightRouter.patch("/api/flights/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let flight = req.body;
    console.log(flight);
    let data = await flightModel.findByIdAndUpdate(id, flight);

    console.log(data);
    console.log("Update your new flight Thank you");
    res.status(200).send(data);
  } catch (error) {
    res.status(204).send(`error in update the flight`);
    console.log({ error: `error: ${error.message}` });
  }
});

//Delete flight

flightRouter.delete("/api/flights/:id", async (req, res) => {
  try {
    let id = req.params.id;

    let data = await flightModel.findByIdAndDelete(id);

    console.log(data);
    console.log("flight deleted");
    res.status(202).send(data);
  } catch (error) {
    res.status(404).send(`error in delete the flight`);
    console.log({ error: `error: ${error.message}` });
  }
});

module.exports = {
  flightRouter,
};
