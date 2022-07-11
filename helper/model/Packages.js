import mongoose from "mongoose";

const Packages = mongoose.Schema(
  {
    PackageName: {
      type: String,
      required: true,
    },
    PackagePrice: {
      type: String,
      required: true,
    },
    PackagePeriod: {
      type: String,
      required: true,
    },
    EveryDayReward: {
      type: String,
      required: true,
    },
    StepsGoal: {
      type: String,
      required: true,
    },
    QRCode: {
      type: String,
      required: true,
    },
    AccountNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.Package || mongoose.model("Package", Packages);