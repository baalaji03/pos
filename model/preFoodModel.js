import mongoose from "mongoose";

// Define the schema
const PreMadeFoodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
    ingredientConsumption: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingredient",
      required: true
    },
    consumptionUnit: {
      type: String,
      required: true,
    },
    costPerUnit: {
      type: Number,
      required: true,
    },
    lowQuantity: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);


const PreMadeFood = mongoose.model("PreMadeFood", PreMadeFoodSchema);
export default PreMadeFood;
