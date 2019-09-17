const post = require("./post.controller");
const Router = require("express").Router();

Router.post("/new", post.new);
Router.get("/getall", post.getAll);
Router.delete("/delete/:id", post.delete);
Router.put("/:id", post.update);

module.exports = Router;
