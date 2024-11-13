import {model, Schema} from "mongoose"
interface IUser{
    name:String,
    email:String,
    password:String,
    rol:String
}

const UserSchema = new Schema<IUser>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    rol:{
        type:String,
        required:true
    }
    },{timestamps:true})

export const UserModel = model<IUser>('users',UserSchema);