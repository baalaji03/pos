import mongoose from "mongoose";
const foodMenuSchema = new mongoose.Schema(
  {
    foodMenuType: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    code: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
    dineIn: {
      type: String,
      required: true,
    },
    takeAway: {
      type: String,
      required: true,
    },
    // delivery: {
    //   type: mongoose.SchemaTypes.ObjectId,
    //   ref: "",
    //   required: true,
    // },
    description: {
      type: String,
      required: true,
    },

    ingredientConsumption: {
      type: String,
      required: true,
    },
    photo: {
      type: Buffer,
      required: true,
    },
    CGST: {
      type: Number,
      required: true,
    },
    SGST: {
      type: Number,
      required: true,
    },
    IGST: {
      type: Number,
      required: true,
    },
    VAT: {
      type: Number,
      required: true,
    },
    royaltyPoints: {
      type: Number,
      required: true,
    },
    vegetarian: {
      type: String,
      required: true,
    },
    Beverage: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

const foodMenu = mongoose.model("foodMenu", foodMenuSchema);
export default foodMenu;

