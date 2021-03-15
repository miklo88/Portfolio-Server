const express = require("express");
const db = require("../database/dbConfig");
const router = express.Router();

// https://expressjs.com/en/guide/routing.html
const userModel = require("../database/helper_modules/user-model");

router.get("/", async (req, res, next) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const users = await userModel.findbyId(id);
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const [id] = await db("User").insert(req.body);
    const addUser = await db("User").where("id", id).first();
    return res.status(201).json(addUser);
  } catch (err) {
    next(err);
  }
});
// router.put
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params.id;
    const users = await userModel.findbyId(id);
    // const users = await userModel.remove(id);
    userModel.remove(users);
    res.status(207).json(users);
    // then I can apply the delete() method to remove me.
    //return a response message of "deletion was successful".
  } catch (err) {
    next(err);
    console.log("delete endpoint error.");
  }
});

module.exports = router;
