import initDB from "../../../helper/initDB";
import ActivationCodes from "../../../helper/model/ActivationCodes";

initDB();

export default async (req, res) => {
  if (req.method === "POST") {
    handlePostIt(req, res);
  } else if (req.method === "GET") {
    handleGetIt(req, res);
  } else if(req.method === "DELETE"){
    hnadleDeleteIt(req, res)
  }
};

const handlePostIt = async (req, res) => {
  try {
    const { activationKey } = req.body;

    if (!activationKey) {
      return res.status(422).json({ error: "please enter an activation code" });
    }

    const activationKeys = await new ActivationCodes({
      ActivatioKey: activationKey,
    }).save();

    res.status(201).json(activationKeys);
  } catch (error) {
    console.log(error);
  }
};

const handleGetIt = async (req, res) => {
  const activationFindKey = await ActivationCodes.find();
  res.status(200).json(activationFindKey);
};



const hnadleDeleteIt = async(req, res) =>{

  const {id} = req.body;





  const activationFindKey = await ActivationCodes.findByIdAndDelete({_id:id})
  res.status(200).json(activationFindKey);




}