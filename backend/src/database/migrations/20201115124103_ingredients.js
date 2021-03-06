
exports.up = function(knex) {
  return knex.schema.createTable('ingedients', function(t) {
      t.string('id').primary();
      t.string('name').notNullable();
      t.string('type').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ingedients')
};
