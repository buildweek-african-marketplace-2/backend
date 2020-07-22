exports.up = async function(knex) {
  await knex.schema.createTable('items', items => {
    items.increments();
    items.string('image').notNullable();
    items.string('name').notNullable();
    items.string('description').notNullable();
    items.string('price').notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('users');
  await knex.schema.dropTableIfExists('items');
};
