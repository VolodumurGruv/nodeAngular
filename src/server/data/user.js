const { Schema, model } = require("mongoose");

const CategorySchema = new Schema({
  name: String,
  product: String,
  img: String,
  description: String,
  price: Number,
});

module.exports = model("Category", CategorySchema);
