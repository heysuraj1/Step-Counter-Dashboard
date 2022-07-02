import initDB from '../../helper/initDB'
import User from '../../helper/model/User'
import bcrypt from 'bcrypt'


initDB()
export default async (req,res)=>{
    const {email,password} = req.body
    try{
       if(!email || !password){
         return res.status(422).json({error:"please add all the fields"})
       }
     const user = await User.findOne({email})
     if(!user){
         return res.status(404).json({error:"User Don't Exists"})
     }

     const doMatch =  await bcrypt.compare(password,user.password)
        if(doMatch){
           
            const {name,role,email} = user
            res.status(201).json(user)
        }else{
           return res.status(401).json({error:"email or password don't match"})
        }

       
    }catch(err){
        console.log(err)
    }
}