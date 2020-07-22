exports.up = async function(knex) {
  await knex.schema.createTable('users', users => {
    users.increments();

    users
      .string('username', 255)
      .notNullable()
      .unique();
    users.string('password', 255).notNullable();
  });

  await knex.schema.createTable('items', items => {
    legos.increments();
    legos.string('image').notNullable();
    legos.string('name').notNullable();
    legos.string('description').notNullable();
    legos.string('price').notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('users');
  await knex.schema.dropTableIfExists('items');
};
