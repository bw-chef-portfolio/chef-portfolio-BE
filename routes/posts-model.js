const db = require("../data/dbConfig.js");

module.exports = {
  getAllPosts,
  insert,
  addPost
};

function getAllPosts() {
  return db("posts");
}

function insert(post) {
  return db("posts").insert(post);
}

async function addPost(post) {
  const [id] = await db("posts").insert(post, "id");

  return findPostById(id);
}

function findPostById(id) {
  return db("posts")
    .where({ id })
    .first();
}
