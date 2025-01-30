import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/,
    },
    email: {
      type: String,
      required: false,
      trim: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/,
    },
    dateOfBirth: {
      type: Date,
      required: false,
    },
    dateOfAnniversary: {
      type: Date,
      required: false,
    },
    defaultDiscount: {
      type: String,
      required: false,
      validate: {
        validator: function (v) {
          return /^(\d+|\d+%)$/.test(v); // Validates '10' or '10%'
        },
        message:
          "Default Discount must be a number or percentage (e.g., 10 or 10%).",
      },
    },
    deliveryAddress: {
      type: String,
      required: false,
      trim: true,
    },
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerSchema);

const uploadscustomerSchema = new mongoose.Schema(
  {
    upload: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const uploads = mongoose.model("Uploaded", uploadscustomerSchema);


export { Customer, uploads };
