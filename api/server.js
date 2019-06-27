const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/auth-router.js");
const postsRouter = require("../routes/posts-router.js");

const server = express();

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: [ 'x-auth-token' ],
};


server.use(helmet());
server.use(express.json());
server.use(cors(corsOptions));

server.use("/api/auth", authRouter);
server.use("/api/posts", postsRouter);

server.get("/", (req, res) => {
  res.send("WE ARE UP!");
});

module.exports = server;