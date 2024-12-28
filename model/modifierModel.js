import mongoose from "mongoose";
const modifierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ingredient: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Ingredient", // Reference to the Ingredient model
      required: true,
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
    },
    costPerUnit: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Ingredient", // Reference to the Ingredient model
      
    },
  },

  { timestamps: true }
);

const Modifier = mongoose.model("Modifier", modifierSchema);
export default Modifier;
