var mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
title: { type: String, required: true },
author: { type: mongoose.Schema.ObjectId, ref: "Authors", required: true },
summary: { type: String },
isbn: { type: String, required: true },
category: { type: mongoose.Schema.ObjectId, ref: "Category", required: true },
});

const book = mongoose.model("Book", bookSchema);
module.exports = book;

