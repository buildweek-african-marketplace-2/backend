const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
};

function find() {
  return db("items").select("image", "name", "description", "price");
}

function findBy(filter) {
  // make sure to include the role information
  return db("items").where(filter);
}


function findById(id) {
  return db("items")
    .where({ id })
    .first();
}

async function add(item) {
  const [id] = await db("items").insert(item)
  .returning("id");
  return findById(id);
}


async function update(id, changes) {
  await db("items")
      .where({ id })
      .update(changes)
      .returning("id")
      return findById(id)
}

function remove(id) {
  return db("items")
      .where({ id })
      .del()
}