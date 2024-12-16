import mongoose from "mongoose";
const tableSchema = new mongoose.Schema(
  {
    FloorName: {
      type: Object,
    },
    TableName: {
      type: String,
      required: true,
    },
    seatCapacity: {
      type: Number,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Table = mongoose.model("table", tableSchema);
export default Table;
