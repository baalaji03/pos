const taxFieldSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Rate: {
    type: mongoose.Schema.Types.Decimal128, // High precision tax rate
    required: true,
  },
});

const taxSettingsSchema = new mongoose.Schema(
  {
      Tax: {
      type: Boolean,
      required: true,
      default: false,
    },
    taxType: {
      type: String,
      required: function () {
        return this.Tax;
      },
    },
    taxTitle: {
      type: String,
      required: function () {
        return this.Tax;
      },
    },
    taxRegistrationNumber: {
      type: String,
      required: function () {
        return this.Tax;
      },
    },
    isGST: {
      type: Boolean,
      required: function () {
        return this.Tax;
      },
      default: false,
    },
    taxFields: [taxFieldSchema], // Array of dynamically added tax objects
  },
  { timestamps: true }
);
