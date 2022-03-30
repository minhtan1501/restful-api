import mongoose from "mongoose";


function connect(){
    const URL = process.env.MONGODB_URL
    
    mongoose.connect(URL,{
        autoIndex:false,
    },(err) =>{
        if(err) throw err
        console.log("connect succesfully");
    })
    
}

export default connect