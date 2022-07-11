import initDB from "../../../helper/initDB";
import Packages from "../../../helper/model/Packages";
initDB();

export default async (req, res) => {
  if (req.method === "GET") {
    getPackages(req, res);
  } else if (req.method === "POST") {
    postPackages(req, res);
  } else if (req.method === "DELETE") {
    deletePackages(req, res);
  } else if (req.method === "PUT") {
    updatePackages(req, res);
  }
};

const getPackages = async (req, res) => {
  const packag = await Packages.find();

  res.status(200).json(packag);
};

const postPackages = async (req, res) => {
  const {
    PackageName,
    PackagePrice,
    PackagePeriod,
    EveryDayReward,
    StepsGoal,
    QRCode,
    AccountNumber,
  } = req.body;

  if (
    !PackageName ||
    !PackagePrice ||
    !PackagePeriod ||
    !EveryDayReward ||
    !StepsGoal ||
    !QRCode ||
    !AccountNumber
  ) {
    res.status(222).status({ error: "Please Provide All The Details" });
  }

  const packag = await new Packages({
    PackageName,
    PackagePrice,
    PackagePeriod,
    EveryDayReward,
    StepsGoal,
    QRCode,
    AccountNumber,
  }).save();
  res.status(200).json(packag);
};

const deletePackages = async (req, res) => {
  const { id } = req.body;

  const packag = await Packages.findByIdAndDelete({ _id: id });
  res.status(200).json(packag);
};

const updatePackages = async (req, res) => {};
