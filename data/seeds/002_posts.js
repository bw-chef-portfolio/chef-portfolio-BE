exports.seed = function(knex, Promise) {
  return knex("posts").insert([
    {
      chef_name: "Erica",
      recipe_title: "Pizza",
      item_photo:
        "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      chef_location: "Boston, Massachusetts",
      item_ingredients: "Pizza Dough, Pizza Sauce, Cheese, Basil",
      user_id: 2
    },
    {
      chef_name: "Mitsuki",
      recipe_title: "Soup",
      item_photo:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      chef_location: "Austin, TX",
      item_ingredients: "Water, Tomatoes, Cream, Basil",
      user_id: 2
    },
    {
      chef_name: "Sam",
      recipe_title: "Steak",
      item_photo:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      chef_location: "Colonie, NY",
      item_ingredients: "Cut of Steak",
      user_id: 2
    }
  ]);
};