import {Schema} from 'mongoose';

export const UserSchema = new Schema({

  _id: { required: false, type: Schema.Types.ObjectId },
  userName:{required:true,unique:true,type:String},
  password:{required:true,type:String},
  role:{required:true,type:String},
  state:{required:true,type:String, enum:['Active','Inactive']}


})