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
    console.log("error");
  }
}

async function findbyId(id) {
  try {
    return await db("User").where({ id }).first();
  } catch (err) {
    console.log("error");
  }
}
async function add(user) {
  try {
    return await db("User").insert(user);
  } catch (err) {
    console.log("add user error. server endpoint");
  }
}
async function remove(id) {
  try {
    return await db("User").where({ id }).del();
  } catch (err) {
    console.log("delete error. Server");
  }
}
module.exports = {
  find,
  findbyId,
  add,
  remove,
};
