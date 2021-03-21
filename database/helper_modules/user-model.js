const db = require("../dbConfig");

async function find() {
  try {
    return await db("User").select(
      "id",
      "FName",
      "LName",
      "Email",
      "Username",
      "Admin"
    );
  } catch (err) {
    console.log("user model error");
  }
}

async function findbyId(id) {
  try {
    return await db("User").where({ id }).first();
  } catch (err) {
    console.log("user model error");
  }
}
async function add(user) {
  try {
    return await db("User").insert(user);
  } catch (err) {
    console.log("add user error. user-model");
  }
}
async function update() {
  try {
    return await db("User");
  } catch (err) {
    console.log("update user error, user-model");
  }
}
async function remove() {
  try {
    return await db("User").del().where({ id: "id" });
  } catch (err) {
    console.log("delete error. user-model");
  }
}
module.exports = {
  find,
  findbyId,
  add,
  update,
  remove,
};
