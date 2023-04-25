const express = require("express");
const { connection } = require("./config/db");
const { UserRouter } = require("./router/user.router");
const { flightRouter } = require("./router/flight.router");
const { bookingRouter } = require("./router/booking.router");
const { authenticate } = require("./middleware/auth");
const app = express();

app.use(express.json());

//routers
app.use("/", UserRouter);
// making authentication route
app.use(authenticate);
app.use("/", flightRouter);
app.use("/", bookingRouter);

// connection to server

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(`app listening on port ${process.env.port}`);
  } catch (error) {
    console.log({ error: `error in connections with port: ${error.message}` });
  }
});
