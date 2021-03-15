exports.up = async function (knex) {
  await knex.schema.createTable("User", (table) => {
    table.increments("id").notNullable();

    table.string("FName").notNullable();
    table.string("LName").notNullable();
    table.string("Email").notNullable();
    table.string("Password").notNullable();
    table.boolean("Admin").notNullable().defaultTo(false);
    table.string("Username").notNullable();
  });
};
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("User");
};
