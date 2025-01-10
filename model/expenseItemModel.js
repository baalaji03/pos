import mongoose from "mongoose";

const expenseItemSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    paymentMethod: {
      type: String,
      enum: ["Cash", "Credit Card", "Bank Transfer", "Other"], // Modify as needed
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Expense",
      required: true,
    },
    responsiblePerson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    note: {
      type: String,
      default: "",
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const expenseItem = mongoose.model("Expense-Item", expenseItemSchema);

export default expenseItem;
