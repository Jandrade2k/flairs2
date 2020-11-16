
exports.up = function(knex) {
  return knex.schema.createTable('drinks', function (t) {
      t.increments('id').primary();
      t.string('name').noNullable();
      t.string('tipo_id').noNullable();
      t.string('recipe_id').notNullable();
      t.string('image');
      t.foreign('tipo_id').references('id').inTable('events_tipos');
      t.foreign('recipe_id').references('id').inTable('recipes');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('drinks');
};
