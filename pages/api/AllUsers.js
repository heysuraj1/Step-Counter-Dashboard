
import initDB from "../../helper/initDB";
import User from "../../helper/model/User";
initDB();

export default async (req, res) => {
  const AllUsers = await User.find();

  res.status(200).json(AllUsers);
};
