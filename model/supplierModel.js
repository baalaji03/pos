import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contactPerson: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      match: /^[0-9\-+\s()]+$/, // Validates phone numbers
    },
    email: {
      type: String,
      required: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Validates email format
    },
    companyAddress: {
      type: String,
      required: true,
    },
    billingAddress: {
      type: String,
      required: true,
    },
    sameAsCompanyAddress: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      default: "",
    },
    image: {
      type: String,
    },
    balance: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

SupplierSchema.index({ name: 1 });

const Supplier = mongoose.model("Supplier", SupplierSchema);

export default Supplier;
