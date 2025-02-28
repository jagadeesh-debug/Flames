import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(process.cwd(), "../.env.local") });

const connection = { isConnected: 0 };
// console.log(process.env.MONGODB_URI);
async function dbConnect() {
    if (connection.isConnected) {
        console.log("Already connected to the database");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
        connection.isConnected = db.connections[0].readyState;
        console.log("New connection established");
    } catch (error) {
        console.error("Error while connecting to the database:", error);
        process.exit(1);
    }
}
dbConnect();
export default dbConnect;
