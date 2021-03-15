exports.up = async function (knex) {
  await knex.schema.createTable("Page", (table) => {
    table.increments("id").primary();

    // table.string("Title").notNullable();
    // table.string("Comments").notNullable();
    //   table.string("User").notNullable();
    // table.date("post_date").notNullable();
    //   table.timestamp('created_at').defaultTo(knex.fn.now())
  });
};
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("Page");
};
