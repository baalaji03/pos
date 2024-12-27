import mongoose from "mongoose";
const ingredientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: Number,
      required: true,
    },
    purchaseUnit: {
      type: String,
      required: true,
    },
    consumptionUnit: {
      type: String,
      required: true,
    },
    conversionRate: {
      type: Number,
      required: true,
    },
    purchasePrice: {
      type: Number,
      required: true,
    },
    costPerUnit: {
      type: Number,
      required: true,
    },
    lowQuantity: {
      type: Number,
      required: true,
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
    },
  },

  { timestamps: true }
);

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

const uploadIngredientSchema = new mongoose.Schema(
  {
    upload: {
      type: Array
    },
  },
  { timestamps: true }
);

const upload = mongoose.model("Upload", uploadIngredientSchema);


export  { Ingredient, upload };

