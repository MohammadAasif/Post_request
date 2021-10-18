// JavaScript source code
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    thumbnails: String,
    product_gallery: String,
    description: String,
    base_price: Number,
    sell_price: Number,
    category_name: String,
    tags: String,
    additional_information: String,
});

const userModal = mongoose.model("products", userSchema);

module.exports = userModal;
