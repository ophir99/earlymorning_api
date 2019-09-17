const user = require("./user.controller");
const multer = require("multer");
const Router = require("express").Router();

// Router.use(multer.memoryStorage({}));
Router.post("/new", user.create);
Router.post("/login", user.login);

module.exports = Router;
