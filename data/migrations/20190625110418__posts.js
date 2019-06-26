const { dropTable, fkey } = require("../helpers/fkeys");
exports.up = function(knex) {
    return knex.schema.createTable("posts", posts => {
      posts.increments();
  
      posts.string("chef_name", 255);
      posts.string("recipe_title", 255);
      posts.string("item_photo", 255);
      posts.string("chef_location", 255);
      posts.string("item_ingredients", 255);
      
      fkey(posts, "user_id", "users");
    });
  };
  
  exports.down = dropTable("posts");