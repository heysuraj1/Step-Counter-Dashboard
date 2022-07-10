import initDB from "../../../helper/initDB";
import PaymentRequests from "../../../helper/model/PaymentRequest";
initDB();

export default async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(422).json({ error: "Please Provide Client ID" });
  }

  const PaymentConfirmation = await PaymentRequests.findOne({
    UserId: id,
  });

  res.status(200).json(PaymentConfirmation);
};
