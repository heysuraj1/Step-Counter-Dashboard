import initDB from "../../../helper/initDB";
import ReferalCoin from "../../../helper/model/ReferalCoin";

initDB();
export default async (req, res) => {

if (req.method === "GET") {
  getReferalCode(req, res);
}
if (req.method === "PUT") {
  updateReferalCode(req, res);
}
};

  const getReferalCode = async (req, res) => {
    const sendReferal = await ReferalCoin.findOne();
    res.status(200).json(sendReferal);
  };

  const updateReferalCode = async (req, res) => {
    const { id, updatedLimit } = req.body;

    const updateLimit = await ReferalCoin.findByIdAndUpdate(
      { _id: id },
      { ReferalCoinLimit: updatedLimit }
    );

    res.status(200).json(updateLimit)
  };
