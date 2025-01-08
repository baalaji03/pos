import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    enableLogin: {
      type: Boolean,
      default: false,
    },
    Username: {
      type: String,
      required: true, 
    },
    Email: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
    
    Role: {
      type: String,
      required: true 
    },
    profilePicture: {
      type: Buffer
      
    },
    govtProof: {
      type: Buffer,
      required: true,
    },
  },

  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
