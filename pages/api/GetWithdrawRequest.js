import initDB from "../../helper/initDB";
import WithdrawReq from "../../helper/model/WithdrawReq";
initDB();
export default async (req, res) => {
  if (req.method === "POST") {
    const { userUniqueId } = req.body;

    try {
      const WithdrawRequests = await WithdrawReq.find({
        userUniqueId: userUniqueId,
      });
      res.status(201).json(WithdrawRequests);
    } catch (error) {
      console.log(error);
    }
  } else if (req.method === "GET") {
    const userReq = await WithdrawReq.find();
    res.status(200).json(userReq);
  }
};
