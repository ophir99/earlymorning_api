const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: "string",
  description: "string"
});

const model = mongoose.model("posts", schema);

module.exports = model;
