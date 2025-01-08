import mongoose from "mongoose";

// Assuming you already have other collections like Ingredient, Category, and Stock.
const lowStockSchema = new mongoose.Schema(
  {
    stockName: {
      type: String, 
      required: true,
    },
    code: {
      type: String, 
      required: true,
    },
    category: {
      type: String, 
      required: true,
    },
    stockQuantityAmount: {
      type: Number, 
      required: true,
    },
    lowQuantityAmount: {
      type: Number, 
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }, // Enable virtuals in JSON response
    toObject: { virtuals: true }, // Enable virtuals in Object response
  }
);

const lowStock = mongoose.model("lowStock", lowStockSchema);

export default lowStock;
