import mongoose from "mongoose";

const slowStockSchema = new mongoose.Schema(
  {
    stockName: {
      type: String,
      
      required: true,
    },
    code: {
      type: String,
    },
    category: {
      type: String,
      
      required: true,
    },
    quantity: {
      type: String,
   
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }, // Enable virtuals in JSON response
    toObject: { virtuals: true }, // Enable virtuals in Object response
  }
);


const slowStock = mongoose.model("slowStock", slowStockSchema);

export default slowStock;
