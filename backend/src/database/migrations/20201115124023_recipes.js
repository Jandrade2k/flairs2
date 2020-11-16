
exports.up = function(knex) {
  return knex.schema.createTable('recipes', function(t) {
      t.increments('id').primary();
      t.string('preparation_mode').notNullable();
  })
};

exports.down = function(knex) {
  return knex.chema.dropTable('recipes');
};
