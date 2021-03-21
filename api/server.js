const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
//routes go here
const Home = require("../routes/Home");
const User = require("../routes/User");
//MIDDLEWARE
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/home", Home);
server.use("/user", User);

server.get("/", async (req, res) => {
  try {
    res.status(200).json({
      url: "/",
      message: "Welcome to the server.",
      operation: "GET",
    });
  } catch (err) {
    res.status(503).json({ message: "/, server.js endpoint." });
    next(err);
  }
});

module.exports = server;
