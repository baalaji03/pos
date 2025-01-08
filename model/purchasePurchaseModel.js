import mongoose from "mongoose";

const PurchasesSchema = new mongoose.Schema(
  {
    referenceNumber: {
      type: String,
      required: true,
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
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingredient",
      required: true,
    },
    grandTotal: {
      type: Number,
      required: true,
    },
    paid: {
      type: Number,
      required: true,
      default: 0,
    },
    due: {
      type: Number,
      default: 0,
    },
    paymentMethod: {
      type: String,
      enum: ["Cash", "Credit Card", "Debit Card"],
      required: true,
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    
  },
  {
    timestamps: true,
  }
);


PurchasesSchema.pre("save",  function (next) {
    this.due = this.grandTotal - this.paid; 
    
   
  next();
});

const purchasePurchase = mongoose.model("purchasess", PurchasesSchema);

export default purchasePurchase;

