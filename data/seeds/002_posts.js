exports.seed = function(knex, Promise) {
  return knex("posts").insert([
    {
      chef_name: "Erica & Andrew's Wedding",
      recipe_title: "Rustic",
      item_photo:
        "https://images.unsplash.com/photo-1510076857177-7470076d4098?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
      chef_location: "Boston, Massachusetts",
      item_ingredients: "",
      user_id: 2
    },
    {
      chef_name: "Eric & Samantha's Wedding",
      recipe_title: "Beach",
      item_photo:
        "https://images.unsplash.com/photo-1546193430-c2d207739ed7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1978&q=80",
      wedding_location: "San Diego, CA",
      item_ingredients: "",
      user_id: 2
    },
    {
      chef_name: "Mitsuki & Takao's Wedding",
      recipe_title: "Modern",
      item_photo:
        "https://images.unsplash.com/photo-1522057384400-681b421cfebc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      wedding_location: "Austin, TX",
      item_ingredients: "",
      user_id: 2
    },
    {
      chef_name: "Sam & Alice's Wedding",
      recipe_title: "Country",
      item_photo:
        "https://images.unsplash.com/photo-1475714622877-641e013c6096?ixlib=rb-1.2.1&auto=format&fit=crop&w=1346&q=80",
      wedding_location: "Colonie, NY",
      item_ingredients: "",
      user_id: 2
    },
    {
      chef_name: "Kate & Kristen's Wedding",
      recipe_title: "Rustic",
      item_photo:
        "https://images.unsplash.com/photo-1482482097755-0b595893ba63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      wedding_location: "Seattle, WA",
      item_ingredients: "",
      user_id: 2
    },
    {
      chef_name: "Josh & Amanda's Wedding",
      recipe_title: "Modern",
      item_photo:
        "https://images.unsplash.com/photo-1527578400122-85bbbb91d53c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      wedding_location: "Los Angelos, CA",
      item_ingredients: "",
      user_id: 2
    },
    {
      chef_name: "Daniel & Lucy's Wedding",
      recipe_title: "Country",
      item_photo:
        "https://images.unsplash.com/photo-1509610973147-232dfea52a97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      wedding_location: "Denver, CO",
      item_ingredients: "",
      user_id: 2
    },
    {
      chef_name: "Cynthia & Christina's Wedding",
      recipe_title: "Modern",
      item_photo:
        "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      wedding_location: "Manhattan, NY",
      item_ingredients: "",
      user_id: 2
    },
    {
      chef_name: "Sumiko & Ryosuke's Wedding",
      recipe_title: "Modern",
      item_photo:
        "https://images.unsplash.com/photo-1522333323-32663f141b57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
      wedding_location: "Boston, MA",
      item_ingredients: "",
      user_id: 2
    }
  ]);
};