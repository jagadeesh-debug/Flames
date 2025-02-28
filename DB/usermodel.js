import mongoose from "mongoose";
import { type } from "os";

const userSchema = new  mongoose.Schema({
    username1:{
        type: String,
        required: true
    },
    username2:{
        type: String,
        required: true
    },
    result:{
        type: String,
        required: true,
    },
});
export default mongoose.models.User || mongoose.model('User', userSchema);