import mongoose from "mongoose";
const categorySchema = new mongoose.Schema(
  {
    Category: {
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

const category = mongoose.model("category", categorySchema);
export default category;
