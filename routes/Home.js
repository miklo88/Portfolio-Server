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

router.get("/", async (req, res, next) => {
  try {
    res.status(200).json({
      url: "/",
      message: "Home endpoint",
      operation: "GET",
      tempObj,
      tempList,
    });
  } catch (err) {
    res.status(503).json({ message: "/, home error point." });
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(201).json({
      message: "posted.",
      operation: "POST",
    });
  } catch (err) {
    res.status(503).json({ message: "home post." });
    next(err);
  }
});
module.exports = router;
