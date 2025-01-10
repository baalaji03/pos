import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
