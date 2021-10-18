// JavaScript source code
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    user_id: Number,
    total_items: Number,
    products: String,
    billing_address: String,
    shipphing_address: String,
    transcation_status: Boolean,
    payment_mode: String,
    payment_status: String,
    order_status: String,
});

const userModal = mongoose.model("orders", userSchema);

module.exports = userModal;

