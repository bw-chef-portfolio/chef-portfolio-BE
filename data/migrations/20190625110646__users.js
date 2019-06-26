const { dropTable } = require("../helpers/fkey");
exports.up = function(knex) {
    return knex.schema.createTable("users", table => {
      table.increments();
  
      table
        .string("username", 128)
        .notNullable()
        .unique();
  
      table.string("password").notNullable();
  
      table.string("email", 128).notNullable();
  
      table.string("location", 128).notNullable();
    });
  };
  
  exports.down = dropTable("users");