import mongoose from "mongoose";

const adjustStockSchema = new mongoose.Schema(
  {
    stockName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingredient",
      required: true,
    },
    code: {
      type: String,
    },
    currentStocks: {
      type: Number,
      required: true,
      default: 0,
    },
    date: {
      type: Date,
      required: true,
    },
    quantity: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Stock",
      required: true,
    },
    responsiblePerson: {
      type: String,
      required: true,
    },
    consumptionStatus: {
      type: String,
      enum: ["Minus", "Plus"],
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }, // Enable virtuals in JSON response
    toObject: { virtuals: true }, // Enable virtuals in Object response
  }
);
adjustStockSchema.virtual("stockDetails").get(function () {
  return `${this.stockName} (${this.code})`;
});
const adjustStock = mongoose.model("adjuststock", adjustStockSchema);

export default adjustStock;
