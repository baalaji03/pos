import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema(
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
    responsiblePerson: {
      type: String,
      required: true,
    },
    supplier: {
      type: String,
      required: true,
    },
    category: {
      type: String, 
      required: true,
    },
        unitPrice: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        
    paid: {
      type: Number,
      default: 0, // Initial payment made
    }
    
  },
  { timestamps: true }
);

const Purchase = mongoose.model("Purchase", purchaseSchema);
export default Purchase;
