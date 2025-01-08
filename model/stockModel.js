import mongoose from "mongoose";

const StockSchema = new mongoose.Schema(
  {
    stockName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingredient",
      required: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
    unit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingredient",
      required: true,
    },
    conversionRate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingredient",
      required: true,
    },
    purchasePrice: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingredient",
      required: true,
    },
    costPerUnit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingredient",
      required: true,
    },
    lowQuantity: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingredient",
      required: true,
    },
    stockAvailable: {
      type: Boolean,
      required: true,
      default: false,
    },
    quantity: {
      type: Number,
      required: function () {
        return this.stockAvailable; // Quantity is required if stock is available
      },
      min: 0, // Quantity cannot be negative
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }, // Enable virtuals in JSON response
    toObject: { virtuals: true }, // Enable virtuals in Object response
  }
);

// Virtual field to combine stockName and code
StockSchema.virtual("stockDetails").get(function () {
  return `${this.stockName} (${this.code})`;
});

const Stock = mongoose.model("Stock", StockSchema);
export default Stock;
