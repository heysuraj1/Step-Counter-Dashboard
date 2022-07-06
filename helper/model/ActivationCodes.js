import mongoose from "mongoose";

const ActivationCodes = new mongoose.Schema(
  {
    ActivatioKey: {
      type: String,
      required: true,
    }
    
  },
  {
    timestamps: true,
  }
);



export default mongoose.models.ActivationCode || mongoose.model("ActivationCode", ActivationCodes);