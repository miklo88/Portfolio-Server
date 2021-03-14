const express = require("express");
const router = express.Router();
// https://expressjs.com/en/guide/routing.html
const tempObj = {
  one: "one value",
  two: "two value",
  three: "three value",
  four: "four value",
};
const tempList = [];

router.get("/", (req, res, next) => {
  res.status(200).json({
    url: "/",
    message: "Home endpoint",
    operation: "GET",
    tempObj,
    tempList,
  });
  next();
});

router.post("/", (req, res) => {
  res.status(201).json({
    message: "posted.",
    operation: "POST",
  });
});
module.exports = router;
