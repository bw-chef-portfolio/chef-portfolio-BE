# chef-portfolio-BE

The post will have this basic format:

```{
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
```

https://chef-portfolio-bw.herokuapp.com/api/api/auth/register

- Post will register a new user and Will provide an JSON web token

- <strong>Required</strong>: username, password, and location

https://chef-portfolio-bw.herokuapp.com/api/auth/login

- Post request will login a registered user and will provide the JSON web Token.

- <strong>Required</strong>: username and password

https://chef-portfolio-bw.herokuapp.com/api/posts/:id

- a GET request to return the post with the specific ID.

https://chef-portfolio-bw.herokuapp.com/api/posts

- a Post that will return the post object that is created for the logged in user
- <strong>Required</strong>: chef_name

https://chef-portfolio-bw.herokuapp.com/api/posts/:id

- a delete request to this route will delete the post id of that route for a logged in user. 




