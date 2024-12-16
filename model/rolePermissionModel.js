import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    required: true,
  },
});

const subSectionSchema = new mongoose.Schema({
  data: {
    type: [permissionSchema], // Array of permissions
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const sectionSchema = new mongoose.Schema({
  data: {
    type: [subSectionSchema], // Array of sub-sections
    required: true,
  },
});

const settingsSchema = new mongoose.Schema({
  data: {
    type: [subSectionSchema], // Array of sub-sections
    required: true,
  },
});

const moduleSchema = new mongoose.Schema({
  dashboard: {
    type: [permissionSchema],
    default: [],
  },
  company: {
    type: [permissionSchema],
    default: [],
  },
  plan: {
    type: [permissionSchema],
    default: [],
  },
  coupons: {
    type: [permissionSchema],
    default: [],
  },
  order: {
    type: [permissionSchema],
    default: [],
  },
  mail: {
    type: [permissionSchema],
    default: [],
  },
  user_management: {
    type: [permissionSchema],
    default: [],
  },
  review_management: {
    type: [permissionSchema],
    default: [],
  },
  ticket: {
    type: [permissionSchema],
    default: [],
  },
  plan_Request: {
    type: [permissionSchema],
    default: [],
  },
  order_Confirmation: {
    type: [permissionSchema],
    default: [],
  },
  leonex_Family: {
    type: [sectionSchema], // Nested sections for Leonex Family
    default: [],
  },
  referral_Program: {
    type: [sectionSchema], // Nested sections for Referral Program
    default: [],
  },
  settings: {
    type: [settingsSchema], // Nested sections for settings
    default: [],
  },
});

const roleSchema = new mongoose.Schema(
  {
    role_name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    permissions: {
      type: moduleSchema, // Define all permissions here
      required: true,
    },
  },
  { timestamps: true }
);

const Role = mongoose.model("Role", roleSchema);
export default Role;
