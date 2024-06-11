import { Schema, model, models } from "mongoose";

// user interface
export interface IUser extends Document {
    clerkId: string;
    name: string;
    email: string;
    picture: string;
    joinedAt: Date;
}

// user model
const UserSchema =new Schema({
    clerkId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    picture: { type: String},
    joinedAt: { type: Date, default: Date.now }
})

const User = models.User || model<IUser>('User', UserSchema)

export default User;