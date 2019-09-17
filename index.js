const express = require("express");

const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");

const user = require("./user/user.routes");

mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => console.log("Connected**"))
  .catch(err => console.log(err));

const app = express();

app.use(cors());

app.use(express.json());

app.use("/user", user);
app.use("/posts", require("./post/post.routes"));
app.listen(4567, () => {
  console.log("APi is up and running");
});
