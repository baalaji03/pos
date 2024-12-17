import mongoose from "mongoose";
const settingsSchema = new mongoose.Schema(
  {
    restaurantName: {
      type: String,
      required: true,
    },
    restaurantShortName: {
      type: String,
      required: true,
    },
    invoiceLogo: {
      type: Buffer,
      required: true,
    },
    Website: {
      type: String,
      required: true,
    },
    dateFormat: {
      type: Date,
      default: Date.now,
    },
    currencySymbol: {
      type: String,
      required: true,
    },
    currencyPosition: {
      type: String,
      enum: ["After amount", "Before amount"],
      required: true,
    },
    Precision: {
      type: String,
      required: true,
    },
    decimalSeparator: {
      type: String,
      enum: ["Dot", "Comma", "Space"],
      required: true,
    },
    thousandSeparator: {
      type: String,
      enum: ["Dot", "Comma", "Space"],
      required: true,
    },
    clickingItemsOnPOS: {
      type: String,
      enum: [],
      required: true,
    },
    defaultOrderType: {
      type: String,
      enum: ["Dine In ", "Take Away ", "Delivery"],
      required: true,
    },
    
    defaultDeliveryPartner: {
      type: String,
      enum: ["Zomato"],
      required: true,
    },
    defaultWaiter: {
      type: String,
      required: true,
    },
    defaultCustomer: {
      type: String,
      required: true,
    },
    defaultPaymentMethod: {
      type: String,
      enum: ["Zomato"],
      required: true,
    },
    placeOrderToolTip: {
      type: String,
      required: true,
    },
    foodMenuToolTip: {
      type: String,
      required: true,
    },
    smsSentAuto: {
      type: String,
    },
    prePostPayment: {
      type: String,
      enum: ["Post Payment", "Pre Payment"],
      required: true,
    },
    serviceCharge: {
      type: Number,
      required: true,
    },
    deliveryCharge: {
      type: Number,
      required: true,
    },
    activeLoginButton: {
      type: String,
      enum: ["Pin", "Username & Password"],
      required: true,
    },
    loginOption: {
      type: String,
      enum: ["Pin", "Username & Password"],
      required: true,
    },
    loyaltyPoint: {
      type: String,
      enum: ["Enable", "Disable"],
      required: true,
    },
    minimumLoyaltyPointRedeem: {
      type: Number,
      required: true,
    },
    loyaltyPointRate: {
      type: Number,
      required: true,
    },
    exportDailySales: {
      type: String,
      enum: ["Enable", "Disable"],
      required: true,
    },
  },
  { timestamps: true }
);

const Settings = mongoose.model("settings", settingsSchema);
export default Settings;
