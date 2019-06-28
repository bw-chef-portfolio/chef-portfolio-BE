const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/auth-router.js");
const postsRouter = require("../routes/posts-router.js");

const server = express();




server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/posts", postsRouter);

server.get("/", (req, res) => {
  res.send("WE ARE UP!");
});

module.exports = server;