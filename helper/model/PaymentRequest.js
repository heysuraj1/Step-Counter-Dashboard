import mongoose from "mongoose";

const PaymentRequests = mongoose.Schema(
  {
    UserId: {
      type: "String",
      required: true,
    },
    transectionId: {
      type: "String",
      required: true,
    },
    paymentScreenshort: {
      type: "String",
      required: true,
    },
    approvalStatus: {
      type: "String",
      default: "Pending",
    },
    remark: {
      type: "String",
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);



export default mongoose.models.PaymentRequest || mongoose.model("PaymentRequest", PaymentRequests);