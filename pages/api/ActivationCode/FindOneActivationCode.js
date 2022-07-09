import initDB from "../../../helper/initDB";
import ActivationCodes from "../../../helper/model/ActivationCodes";

initDB()


export default async (req,res) =>{


    const {userActivationCode} = req.body;



    const ActivationCode = await ActivationCodes.find({ActivatioKey:userActivationCode})

    res.status(200).json(ActivationCode)







    




}