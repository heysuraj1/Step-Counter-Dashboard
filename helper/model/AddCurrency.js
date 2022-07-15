import mongoose from "mongoose";

const AddCurrency = new mongoose.Schema(
  {
    TokenName: {
      type: String,
      required: true,
    },
    Symbol: {
      type: String,
      required: true,
    },
    Conversion: {
      type: String,
      required: true,
    },
    WalletAddress: {
      type: String,
      required: true,
    },
    QRCode: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.AddCurrnc || mongoose.model("AddCurrnc", AddCurrency);
