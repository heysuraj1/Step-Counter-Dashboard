import initDB from "../../helper/initDB";
import User from "../../helper/model/User";

initDB();

export default async (req, res) => {
  const { activationkey, userid } = req.body;

  if ((!activationkey, !userid)) {
    return res
      .status(422)
      .json({ error: "please provide all the informations" });
  }

  const UpdateUserActivation = await User.findByIdAndUpdate(
    { _id: userid },
    {
      activationKey: activationkey,
    }
  );

  res.status(200).json(UpdateUserActivation);
};
