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
    res.status(503).json({ message: "update error: users-endpoint" });
    next(err);
  }
});
// router.put
router.put("/:id", async (req, res, next) => {
  try {
    const findInput = await req.body;
    console.log("find input: ", findInput);
    const user = await db("User").where("id", req.params.id).update(req.body);
    await userModel.update(user);
    return res.status(200).json({ message: "User updated." });
  } catch (err) {
    res.status(503).json({ message: "update error: users-endpoint." });
    next(err);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const user = await db("User").where("id", req.params.id);
    console.log("user id: ", user);
    await userModel.remove(user);
    return res.status(207).json({ message: "Goodbye." });
  } catch (err) {
    res.status(503).json({ message: "delete error: users-endpoint." });
    next(err);
  }
});

module.exports = router;
