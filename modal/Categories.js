// JavaScript source code
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    slug: String,
    image: String,
    description:String,
});

const userModal = mongoose.model("categories", userSchema);

module.exports = userModal;

