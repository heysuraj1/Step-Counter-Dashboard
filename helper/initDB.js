import mongoose from 'mongoose'

function initDB(){
    if(mongoose.connections[0].readyState){
        console.log('already connected')
        return
    }

    mongoose.connect("mongodb+srv://myclientdatabse:exU9ShwP4YRG11WD@cluster0.rn6wv.mongodb.net/?retryWrites=true&w=majority",{
        useNewUrlParser : true,
        useUnifiedTopology:true

    })
    mongoose.connection.on('connected',()=>{
        console.log('connected sucessfully')
    })
    mongoose.connection.on('error',(err)=>{
        console.log('kuch gadbad hai yar aur vo ye hai ki =>',err)
    })
}


export default initDB; 