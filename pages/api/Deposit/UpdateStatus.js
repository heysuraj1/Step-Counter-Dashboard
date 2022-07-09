import initDB from "../../../helper/initDB";
import PaymentRequests from "../../../helper/model/PaymentRequest";

initDB();

export default async (req, res) => {
  const { userId, status } = req.body;

  const UpdateStatus = await PaymentRequests.findByIdAndUpdate(
    { _id: userId },
    {
      approvalStatus: status,
    }
  );
  res.status(200).json(UpdateStatus);
};
