import mongoose from "mongoose";

const AdminuserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    AdmiRole: {
      type: String,
      required: true,
      default: "owner",
    },    
    Name: {
      type: String,
      default: "Admin",
    },
    Activated: {
      type: String,
      default: "False",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.AdminUse || mongoose.model("AdminUse", AdminuserSchema);
