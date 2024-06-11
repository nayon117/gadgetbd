import mongoose  from 'mongoose';

let isConnected:Boolean = false;

export const connectToDatabase = async () =>{
    mongoose.set("strictQuery", true)

    if(!process.env.MONGODB_URL) return console.log("MONGODB_URL is not defined in .env file");

    if(isConnected) return console.log("Already connected to database");

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName:'gadgetbd'
        })
        isConnected = true;
        console.log("Connected to database")
    } catch (error) {
        console.log(error)
        throw new Error("Error connecting to database")
    }
}