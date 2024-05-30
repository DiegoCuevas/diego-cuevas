import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const productSchema = new Schema({
  sku: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  price: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
});

const Product = model("Product", productSchema);

export default Product;
