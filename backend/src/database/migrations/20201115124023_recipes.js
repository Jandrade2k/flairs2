
exports.up = function(knex) {
  return knex.schema.createTable('recipes', function(t) {
      t.string('id').primary();
      t.text('preparation_mode').notNullable();
      t.text('ingredient_id').notNullable();
      t.string('qtd_d').notNullable();
      t.text('garrison');
      t.text('qtd_g');
      t.string('cup').notNullable();
  })
};

exports.down = function(knex) {
  return knex.chema.dropTable('recipes');
};
