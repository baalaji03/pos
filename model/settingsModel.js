import mongoose from "mongoose";
const settingsSchema = new mongoose.Schema(
  {
    restaurantName: {
      type: String,
      required: true,
    },
    restaurantShortName: {
      type: String,
      required: true,
    },
    invoiceLogo: {
      type: Buffer,
      required: true,
    },
    Website: {
      type: String,
      required: true,
    },
    dateFormat: {
      type: Date,
      default: Date.now,
    },
    currencySymbol: {
      type: String,
      required: true,
    },
    currencyPosition: {
      type: String,
      enum: ["After amount", "Before amount"],
      required: true,
    },
    Precision: {
      type: String,
      required: true,
    },
    decimalSeparator: {
      type: String,
      enum: ["Dot", "Comma", "Space"],
      required: true,
    },
    thousandSeparator: {
      type: String,
      enum: ["Dot", "Comma", "Space"],
      required: true,
    },
    clickingItemsOnPOS: {
      type: String,
      enum: [],
      required: true,
    },
  },
  { timestamps: true }
);

const Settings = mongoose.model("settings", settingsSchema);
export default Settings;