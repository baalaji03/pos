import mongoose from "mongoose";
const kitchenSchema = new mongoose.Schema(
  {
    NameOfKitchen: {
      type: String,
      required: true,
    },
    Printer: {
      type: String,
      required: true,
      unqiue: true,
      enum: ["Printer1", "Printer2"],
    },
    categories: {
      type: mongoose.Schema.Types.ObjectId, // Reference to Category model
      ref: "category",
    },
  },
  { timestamps: true }
);

const kitchen = mongoose.model("kitchen", kitchenSchema);
export default kitchen;
