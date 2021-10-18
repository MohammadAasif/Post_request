// JavaScript source code
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    slug: String,
});

const userModal = mongoose.model("roles", userSchema);

module.exports = userModal;

