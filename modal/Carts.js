// JavaScript source code
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    product: String,
    user: String,
    product_qty: Number,
    base_price: Number,
    sell_price: Number,
    total_price: Number,

});

const userModal = mongoose.model("carts", userSchema);

module.exports = userModal;
