import initDB from "../../../helper/initDB";
import User from "../../../helper/model/User";

initDB();

export default async (req, res) => {
  const { referalId } = req.body;

  if ((!referalId)) {
    return res
      .status(422)
      .json({ error: "Please Provide Referal ID" });
  }

  const UpdateUserActivation = await User.find(
    {
        referal: referalId,
    }
  );

  res.status(200).json(UpdateUserActivation);
};
