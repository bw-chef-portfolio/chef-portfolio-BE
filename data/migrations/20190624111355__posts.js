exports.up = function(knex) {
  return knex.schema.createTable("posts", posts => {
    posts.increments();

    posts.string("couple_name", 255);
    posts.string("wedding_theme", 255);
    posts.string("wedding_date", 255);
    posts.string("item_photo", 255);
    posts.string("wedding_location");
    posts.string("wedding_photographer");

    posts
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("posts");
};