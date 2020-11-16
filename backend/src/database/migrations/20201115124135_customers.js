
exports.up = function(knex) {
  return knex.schema.createTable('customers', function(t) {
      t.string('id').primary();
      t.string('name').notNullable();
      t.string('phone').notNullable();
      t.string('contact').notNullable();
      t.string('cep').notNullable();
      t.string('place').notNullable();
      t.string('number').notNullable();
      t.string('complement').notNullable();
      t.string('city').notNullable();
      t.string('uf', 2).notNullable();
      t.string('email').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('customers')
};
