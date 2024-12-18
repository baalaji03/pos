import mongoose, { Schema, model } from "mongoose";

const selfOrderSchema = new Schema(
  {
    enableSelfOrder: {
      type: Boolean,
      required: true,
      default: false, // Default to self-order disabled
    },
    qrCodeUrl: {
      type: String, 
      required: false, 
    },
  },
  { timestamps: true }
);
const SelfOrderSettings = mongoose.model("SelfOrderSettings", selfOrderSchema);

export default SelfOrderSettings;
