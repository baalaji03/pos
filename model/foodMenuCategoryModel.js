import mongoose from "mongoose";
const foodMenuCategorySchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "category",
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

     addedBy: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "User", // Reference to the User model
				},
  },

  { timestamps: true }
);

const foodMenuCategory = mongoose.model(
  "foodMenuCategory",
  foodMenuCategorySchema
);
export default foodMenuCategory;
