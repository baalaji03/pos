import mongoose from "mongoose";
const categorySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    addedBy: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("category", categorySchema);
export default Category;
