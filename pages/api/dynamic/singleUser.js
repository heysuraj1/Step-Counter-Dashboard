import initDB from "../../../helper/initDB";
import User from "../../../helper/model/User";

initDB();

export default async (req, res) => {
  const { activeUserId } = req.body;

  if (!activeUserId) {
    return res.status(422).json({ error: "enter valid user id" });
  }

  const SingleUser = await User.find({ _id: activeUserId });

  res.status(200).json(SingleUser);
};
