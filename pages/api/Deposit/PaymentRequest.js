import initDB from "../../../helper/initDB";
import PaymentRequests from "../../../helper/model/PaymentRequest";

initDB();

export default async (req, res) => {
  if (req.method === "POST") {
    CreateNewRequest(req, res);
  }else if(req.method === "GET"){
    FindAllRequest(req, res)
  }
};

const CreateNewRequest = async (req, res) => {
  try {
    const { UserId, transectionId, paymentScreenshort } = req.body;

    if ((!UserId, !transectionId, !paymentScreenshort)) {
      return res
        .status(222)
        .json({ error: "please provide all the informations" });
    }

    const MakePaymentRequest = await new PaymentRequests({
      UserId,
      transectionId,
      paymentScreenshort,
    }).save();

    res.status(200).json(MakePaymentRequest);
  } catch (error) {
    console.log(error);
  }
};



const FindAllRequest = async (req,res) =>{

    const findRequest = await PaymentRequests.find()

    res.status(200).json(findRequest)


}