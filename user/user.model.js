const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: "string",
        unique: true
    },
    password: "string"
});

const model = mongoose.model("user", userSchema);

module.exports = model;
