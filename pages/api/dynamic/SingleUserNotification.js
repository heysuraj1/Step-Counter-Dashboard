import initDB from "../../../helper/initDB";
import Notifications from "../../../helper/model/Notifications";


initDB();

export default async (req, res) => {
  const { activeUserId } = req.body;

  if (!activeUserId) {
    return res.status(422).json({ error: "enter valid user id" });
  }

  const SingleNotification = await Notifications.find({ userUniqueId: activeUserId });

  res.status(200).json(SingleNotification);
};
