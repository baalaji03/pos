import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true
    },
    Description: {
        type: String,
        required: true 
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;
