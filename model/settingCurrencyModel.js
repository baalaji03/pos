import mongoose from "mongoose";
const currencySchema = new mongoose.Schema(
  {
    currencySymbol: {
      type: String,
      required: true,
    },
    conversionRate: {
        type: mongoose.Schema.Types.Decimal128,
        required: true 
    },
  },
  { timestamps: true }
);

const Currency = mongoose.model("Currency", currencySchema);
export default Currency;
