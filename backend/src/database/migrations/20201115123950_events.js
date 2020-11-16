
exports.up = function(knex) {
  return knex.schema.createTable('events', function (t) {
      t.increments('id').primary();
      t.string('name').notNullable();
      t.string('tipo_id').notNullable();
      t.string('porposal_id').notNullable();
      t.date('event_date').notNullable();
      t.date('portion_date').notNullable();
      t.integer('qtd_guests').notNullable();
      t.integer('hours').notNullable();
      t.decimal('price_van').notNullable();
      t.decimal('price_hotel');
      t.decimal('price_food');
      t.decimal('distance').notNullable();
      t.boolean('bv').notNullable();
      t.boolean('royalts').notNullable();
      t.decimal('creation_expense').notNullable();
      t.string('payment_method').notNullable();
      t.integer('qtd_bar').notNullable();
      t.string('customer_id').notNullable();
      t.foreign('tipo_id').references('id').inTable('events_tipos');
      t.foreign('porposal_id').references('id').inTable('proposal');
      t.foreign('customer_id').references('id').inTable('customers');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('events');
};
