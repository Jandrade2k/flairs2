
exports.up = function(knex) {
  return knex.schema.createTable('users', function (t) {
      t.string('id').primary();
      t.string('email').notNullable();
      t.string('password').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
