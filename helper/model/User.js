import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
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
    role: {
      type: String,
      required: true,
      default: "unsubscribed",
      enum: ["subscribed", "unsubscribed"],
    },
    referal: {
      type: String,
      default: "none",
    },
    wallate: {
      type: Number,
      default: 0,
    },
    activationKey: {
      type: String,
      default: "none",
    },
    Name: {
      type: String,
      default: "none",
    },
    Weight: {
      type: String,
      default: "none",
    },
    Height: {
      type: String,
      default: "none",
    },
    DOB: {
      type: String,
      default: "none",
    },
    Age: {
      type: String,
      default: "none",
    },
    Gender: {
      type: String,
      default: "none",
    },
    Goal: {
      type: String,
      default: "none",
    },
    ReferedAndEarned: {
      type: String,
      default: "none",
    },
    RunningPackage: {
      type: String,
      default: "none",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
