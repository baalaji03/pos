import mongoose from "mongoose";

const productionSchema = new mongoose.Schema(
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
    status: {
      type: String,
      required: true,
      enum: ["Final", "Draft"]
    },
    preMadeFoodItem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PreMadeFood",
      required: true,
    },
    addedBy: {
      type: String,
      ref: "User"
      
    },
  },
  {
    timestamps: true,
  }
);

const Production = mongoose.model("Production", productionSchema);

export default Production;
