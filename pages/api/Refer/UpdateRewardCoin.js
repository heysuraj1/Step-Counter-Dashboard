import initDB from "../../../helper/initDB";
import User from "../../../helper/model/User";

initDB();

export default async (req, res) => {
  const { coin, userid } = req.body;

  if ((!coin, !userid)) {
    return res
      .status(422)
      .json({ error: "please provide all the informations" });
  }

  const UpdateUserActivation = await User.findByIdAndUpdate(
    { _id: userid },
    {
        wallate: coin,
    }
  );

  res.status(200).json(UpdateUserActivation);
};
