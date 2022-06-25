import initDB from "../../helper/initDB";
import Notifications from "../../helper/model/Notifications";

initDB();

export default async (req, res) => {
  const { userUniqueId, notificationMessage } = req.body;

  if (!userUniqueId || !notificationMessage) {
    return res.json("please fill all the fields");
  }

  const postedNotification = await new Notifications({
    userUniqueId,
    notificationMessage,
  }).save()




  res.status(201).json(postedNotification)

  res.status(200).json({ name: "John Doe" });
};
