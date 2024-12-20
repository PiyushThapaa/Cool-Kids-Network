import mongoose from "mongoose";

export const connectDB = () => {
    // eslint-disable-next-line no-undef
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"CoolKidsNetworkDB",
    }).then((c)=>console.log(`Database connected with ${c.connection.host}`))
    .catch((e)=>console.log(e))
}