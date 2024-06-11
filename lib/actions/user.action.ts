import User from "@/database/models/user.model";
import { connectToDatabase } from "../mongoose"
import { CreateUserParams, DeleteUserParams, UpdateUserParams } from "./shared.types"
import { revalidatePath } from "next/cache";


// create user in database
export async function createUser(userData:CreateUserParams) {
    try {
        connectToDatabase()
        const newUser = await User.create(userData)
        return newUser;
    } catch (error) {
        console.log(error)
        throw new Error("Error creating user")
    }
}

// get users by id from database
export async function getUserById(params:any) {
    try {
        connectToDatabase()
        const {userId} = params;
        const user = await User.findOne({clerkId:userId})
        return user;
    } catch (error) {
        console.log(error)
        throw new Error("Error getting user")
    }
}

// update user in database
export async function updateUser(params:UpdateUserParams) {
    try {
        connectToDatabase()
        const {clerkId, updateData, path} = params;
        await User.findOneAndUpdate({clerkId},updateData,{new:true})
        revalidatePath(path)
    } catch (error) {
        console.log(error)
        throw new Error("Error creating user")
    }
}

// delete user from database
export async function deleteUser(params:DeleteUserParams) {
    try {
        connectToDatabase()
        const {clerkId} = params;
        const user = await User.findOneAndDelete({clerkId})
        if(!user) throw new Error("user not found")
        const deleteUser = await User.findByIdAndDelete(user._id)
        return deleteUser;
    } catch (error) {
        console.log(error)
        throw new Error("Error creating user")
    }
}