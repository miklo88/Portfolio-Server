const express = require("express");
const helmet = require("helmet");

const server = express();
//routes go here
const Home = require("../routes/Home");
//MIDDLEWARE
server.use(express.json());
server.use(helmet());

server.use("/home", Home);

server.get("/", (req, res) => {
  res.status(200).json({
    url: "/",
    message: "Welcome to the server.",
    operation: "GET",
  });
});

module.exports = server;
