import mongoose from "mongoose";

const wasteSchema = new mongoose.Schema(
  {
    referenceNumber: {
      type: String,
      required: true,
      unique: true,
    },
    date: {
      type: Date,
      required: true,
    },
    ingredients: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingredient",
      required: true,
    },
    foodMenu: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "foodMenu",
      required: true,
    },
    foodMenuWasteQuantity: {
      type: String,
      required: true,
    },
    responsiblePerson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "adjuststock",
      required: true,
    },
    addedBy: {
      type: String,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Waste = mongoose.model("waste", wasteSchema);

export default Waste;
