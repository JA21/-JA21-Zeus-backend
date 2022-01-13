import { Schema } from "mongoose";

export const UserSchema = new Schema({
  username: { type: String, require: true },
  password: { type:String,required:true},
  createAt:{
    type:Date,
    default:Date.now
  }
});