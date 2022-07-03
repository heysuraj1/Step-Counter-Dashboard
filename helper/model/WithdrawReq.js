import mongoose from "mongoose";

const WithdrawReqSchema = new mongoose.Schema(
  {
    userUniqueId: {
      type: String,
      required: true,
  
    },
    WithdrawCoins: {
      type: String,
      required: true,
    },
    ActivationCode: {
      type: String,
      required: true,
    },
    Status:{
      type: String,
      default:"Pending"
    },
    PaymentWallete:{
        type: String,
        default:"xyzbhghgfehwegfjewh"
    }


  },
  {
    timestamps: true,
  }
);

export default mongoose.models.WithdrawRequest || mongoose.model("WithdrawRequest", WithdrawReqSchema);