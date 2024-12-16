import mongoose from "mongoose";
const areaFloorSchema = new mongoose.Schema(
  {
    areaFloorName: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
   
  },
  { timestamps: true }
);

const areafloor = mongoose.model("areafloor", areaFloorSchema);
export default areafloor;
