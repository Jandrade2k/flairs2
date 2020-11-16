
exports.up = function(knex) {
  return knex.schema.createTable('events_tipos', function(t) {
    t.string('id').primary();
    t.string('name').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('events_tipos');
};
