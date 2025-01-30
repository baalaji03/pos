import mongoose from "mongoose";

const promotionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["Discount", "Free Item"], // Restrict to 'Discount' or 'Free Item'
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Active", "Inactive"], // Replace with actual status options
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    // Fields specific to "Discount" type
    foodMenu: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "foodMenu",
      required: function () {
        return this.type === "Discount";
      },
    },
    discountPercentage: {
      type: Number,
      required: function () {
        return this.type === "Discount";
      },
      min: 0,
      max: 100,
    },
    // Fields specific to "Free Item" type
    salesBuy: {
      type: String,
      required: function () {
        return this.type === "Free Item";
      },
    },
    salesBuyQuantity: {
      type: Number,
      required: function () {
        return this.type === "Free Item";
      },
      min: 1,
    },
    salesGet: {
      type: String,
      required: function () {
        return this.type === "Free Item";
      },
    },
    getQuantity: {
      type: Number,
      required: function () {
        return this.type === "Free Item";
      },
      min: 1,
    },
  },
  { timestamps: true }
);

const Promotion = mongoose.model("Promotion", promotionSchema);

export default Promotion;

