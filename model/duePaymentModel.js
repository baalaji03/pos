import mongoose from "mongoose";

const duePaymentSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier", 
      required: true,
    },
    purchase: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Purchase", 
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0, // Ensures amount cannot be negative
    },
    paymentType: {
      type: String,
      enum: ["Cash", "Credit Card", "Bank Transfer", "Other"], // List of payment types
      required: true,
    },
    notes: {
      type: String,
      trim: true, // Removes extra spaces
    },
  },
  { timestamps: true }
);

const DuePayment = mongoose.model("DuePayment", duePaymentSchema);

export default DuePayment;
