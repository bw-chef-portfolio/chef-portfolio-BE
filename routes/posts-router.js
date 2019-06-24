const express = require("express");
const router = express.Router();

const db = require("../data/dbConfig.js");
const restricted = require("../auth/restricted.js");

router.get("/", restricted, (req, res) => {
  db("posts")
    .returning("id")
    .where({ user_id: req.decodedToken.subject })
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      res.status(500).json({ error: "The posts could not be retrieved." });
    });
});

router.get("/all", (req, res) => {
  db("posts")
    .returning("id")
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      res.status(500).json({ error: "The posts could not be retrieved." });
    });
});

router.get("/:id", restricted, (req, res) => {
  const { id } = req.params;

  db("posts")
    .returning("id")
    .where({ id, user_id: req.decodedToken.subject })
    .first()
    .then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res
          .status(404)
          .json({ error: "You cannot access the post with this specific id." });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "The action with the specified ID could not be retrieved"
      });
    });
});

router.post("/", restricted, (req, res) => {
  const post = req.body;

  if (!post.couple_name) {
    res
      .status(400)
      .json({ error: "Please provide a couple name for the post." });
  } else {
    post.user_id = req.decodedToken.subject;
    db("posts")
      .returning("id")
      .insert(post)
      .then(ids => {
        const id = ids[0];
        db("posts")
          .returning("id")
          .where({ id })
          .first()
          .then(post => {
            res.status(201).json(post);
          });
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error while saving the post to the database."
        });
      });
  }
});

router.put("/:id", restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  if (!changes.item_name) {
    res.status(400).json({
      error: "Please provide a name for the post."
    });
  } else {
    db("posts")
      .where({ id, user_id: req.decodedToken.subject })
      .update(changes)
      .returning("id")
      .then(count => {
        if (count > 0) {
          res.status(200).json(count);
        } else {
          res.status(404).json({
            error: "You cannot access the post with this specific id."
          });
        }
      })
      .catch(error => {
        res.status(500).json({
          error: "The post could not be modified."
        });
      });
  }
});

router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params;
  db("posts")
    .where({ id, user_id: req.decodedToken.subject })
    .del()
    .returning("id")
    .then(count => {
      if (count > 0) {
        res.status(200).json(count);
      } else {
        res
          .status(404)
          .json({ error: "You cannot access the post with this specific id." });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "The post could not be removed."
      });
    });
});

module.exports = router;