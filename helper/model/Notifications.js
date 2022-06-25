import mongoose from "mongoose";

const userNotification = new mongoose.Schema(
  {
    userUniqueId: {
      type: String,
      required: true,
    },
    notificationMessage: {
      type: String,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);



export default mongoose.models.UserNotification || mongoose.model("UserNotification", userNotification);