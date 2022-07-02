import initDB from "../../../helper/initDB";
import User from "../../../helper/model/User";

initDB();

export default async (req, res) => {
  const { wallateValue ,userid} = req.body;

  if (!wallateValue,!userid) {
    return res.status(422).json({ error: "enter valid user id" });
  }

  const wallateVal = await User.findByIdAndUpdate(
    { _id: userid },
    {
        wallate: wallateValue
    }
  )

  res.status(200).json(wallateVal);
};
