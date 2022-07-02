import initDB from "../../helper/initDB";
import User from "../../helper/model/User";

initDB();

export default async (req, res) => {
  const { name, email, dob, age, height, weight, goal, userid } = req.body;


  if ((!name, !email, !dob, !age, !height, !weight, !goal, !userid)) {
    return res
      .status(422)
      .json({ error: "please provide all the informations" });
  }

  const SingleNotification = await User.findByIdAndUpdate(
    { _id: userid },
    {
      Name: name,
      email: email,
      DOB: dob,
      Age: age,
      Height: height,
      Weight: weight,
      Goal: goal,
    }
  )

  res.status(200).json(SingleNotification);
};
