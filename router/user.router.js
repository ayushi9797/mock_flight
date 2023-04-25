const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");
const app = express();

const UserRouter = express.Router();
UserRouter.use(express.json());

// user routes
UserRouter.get("/users", async (req, res) => {
  try {
    res.send(`<h1> USER ROUTER </h1>`);
  } catch (error) {
    console.log(error.message);
  }
});

//Register routes
UserRouter.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  try {
    bcrypt.hash(password, 6, async function (err, hash) {
      if (err) {
        console.log(err.message);
      } else {
        const user = new UserModel({
          name,
          email: email,
          password: hash,
        });
        console.log(user);
        await user.save();
        res.status(201).send(`users successfully registered`);
      }
    });
  } catch (error) {
    res.status(404).send({ message: `error in registration` });
  }
});

//login user
UserRouter.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const user = await UserModel.findOne({ email });
    console.log(user);
    const hashed_password = user?.password;
    if (!user) res.status(404).send(`User needs to be registered first`);
    bcrypt.compare(password, hashed_password, async function (err, result) {
      if (result) {
        const token = jwt.sign({ user_id: user._id }, "flight", {
          expiresIn: "7d",
        });
        console.log(token, user);
        console.log(`user registerd`);
        res.status(201).send(user);
       
      } else {
        console.log(err.message);
      }
    });
  } catch (error) {
    console.log({ error: `error: ${error.message}` });
  }
});

module.exports = {
  UserRouter,
};
