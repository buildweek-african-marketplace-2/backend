const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("items").select("image", "name", "description", "price");
}

function findBy(filter) {
  // make sure to include the role information
  return db("items").where(filter);
}

async function add(item) {
  const [id] = await db("items").insert(item);

  return findById(id);
}

function findById(id) {
  return db("items")
    .where({ id })
    .first();
}