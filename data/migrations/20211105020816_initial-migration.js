
exports.up = function(knex) {
  return knex.schema.createTable('products',tbl => {
      tbl.increments();
      tbl.string('makeup_type', 255).unique().notNullable();
      tbl.string('brand_name', 200).unique().notNullable();
  } )
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('products')
};
