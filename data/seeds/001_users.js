const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex("users").insert([
    {
      username: "chris",
      password: bcrypt.hashSync("password", 14),
      email: "test@test.com",
      location: "Boston, MA"
    },
    {
      username: "chef",
      password: bcrypt.hashSync("password", 14),
      email: "567@567.com",
      location: "Austin, TX"
    },
    {
      username: "chef2",
      password: bcrypt.hashSync("password", 14),
      email: "789@789.com",
      location: "Orlando, FL"
    },
    {
      username: "chef3",
      password: bcrypt.hashSync("password", 14),
      email: "111@111.com",
      location: "Portland, OR"
    },
    {
      username: "chef4",
      password: bcrypt.hashSync("password", 14),
      email: "222@222.com",
      location: "Colonie, NY"
    }
  ]);
};