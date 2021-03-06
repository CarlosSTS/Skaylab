exports.up = function (knex) {
  return knex.schema.createTable('product', function (table) {

    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('url').notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('product')
};




