import mongoose from "mongoose";

export let dbConnection = () => 
{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=> {
        console.log("DB Connected Successfully");
    })
    .catch((error)=>{
        console.log("DB Failed to Connect");
    })
}