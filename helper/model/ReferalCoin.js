import mongoose from "mongoose";

const ReferalCoin = mongoose.Schema(
  {
    ReferalCoinLimit: {
      type: Number,
      default: 2,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.ReferalCoin ||
  mongoose.model("ReferalCoin", ReferalCoin);
