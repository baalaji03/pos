import mongoose from "mongoose";
const printerSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    character: {
      type: String,
      required: true,
    },
    shareName: {
      type: String,
      required: true,
    },
    printerPort: {
      type: Number,
      required: true,
    },
    printerType: {
      type: String,
      required: true,
      enum: ["browswe Popup Print", "Direct Print"],
    },
  },
  { timestamps: true }
);

const Printer = mongoose.model("printer", printerSchema);
export default Printer;
