import initDB from "../../helper/initDB";
import User from "../../helper/model/User";
import bcrypt from "bcrypt"

initDB();

export default async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(422).json({ error: "Please Fill All The Colons" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(422)
        .json({ error: "This user already exist please choose another one" });
    }
    const hashedPassowd = await bcrypt.hash(password, 12);
    const newUser = await new User({
        username,
      email,
      password: hashedPassowd,
    }).save();

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
};
