import mongoose from "mongoose";
const counterSchema = new mongoose.Schema(
  {
    counterName: {
      type: String,
      required: true,
    },
    invoicePrinter: {
      type: String,
      enum: ["Printer 1", "Printer 2"],
      required: true,
    },
    billPrinter: {
      type: String,
      enum: ["Printer 1", "Printer 2"],
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Counter = mongoose.model("Counter", counterSchema);
export default Counter;
