var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
name: { type: String, required: true },
price: { type: Number, required: true },
availability: { type: String,
    enum: ['available', 'not available'],
    required: true },

});

const product = mongoose.model("Product", productSchema);
module.exports = product;

