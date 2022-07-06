import initDB from "../../../helper/initDB";
import WithdrawReq from "../../../helper/model/WithdrawReq";

initDB();

export default async (req, res) => {
  const { userid, status } = req.body;

  if ((!userid, !status)) {
    return res
      .status(422)
      .json({ error: "please provide all the informations" });
  }

  const WithdrawalRequest = await WithdrawReq.findByIdAndUpdate(
    { _id: userid },
    {
      Status: status,
    }
  );

  res.status(200).json(WithdrawalRequest);
};
