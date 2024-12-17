import mongoose from "mongoose";

// Schema for individual permissions (view, create, edit, delete)
const permissionSchema = new mongoose.Schema(
  {
    view: { type: Boolean, default: false },
    create: { type: Boolean, default: false },
    edit: { type: Boolean, default: false },
    delete: { type: Boolean, default: false },
  },
  { _id: false } // No need for an _id in permission schema
);

const moduleSchema = new mongoose.Schema(
  {
    access: { type: Boolean, default: false },
    children: {
      type: Map,
      of: permissionSchema,
      default: {},
    },
  },
  { _id: false } // No need for an _id in module schema
);

// Main Role Schema
const roleSchema = new mongoose.Schema(
  {
    role_name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    permissions: {
      type: Map, // Use a dynamic map to support any top-level permission key
      of: moduleSchema,
      // Each module will follow the moduleSchema
      default: {}, // Default is an empty object
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

// Create and export the Role model
const Role = mongoose.model("Role", roleSchema);

export default Role;
