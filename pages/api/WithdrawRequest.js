import initDB from "../../helper/initDB";
import WithdrawReq from "../../helper/model/WithdrawReq";
initDB()
export default async (req, res) => {
  if (req.method === "POST") {
    const { userUniqueId, WithdrawCoins, ActivationCode ,PaymentWallete} = req.body;

    try {
      if (!userUniqueId || !WithdrawCoins || !ActivationCode || !PaymentWallete) {
        return res.status(422).json({ error: "Please Fill All The Colons" });
      }

      const WithdrawRequests = await new WithdrawReq({
        userUniqueId,
        WithdrawCoins,
        ActivationCode,
        PaymentWallete
      }).save();
      res.status(201).json(WithdrawRequests);
    } catch (error) {
      console.log(error);
    }
  } else if (req.method === "GET") {
    const userReq = await WithdrawReq.find();
    res.status(200).json(userReq);
  }




  // }
};
