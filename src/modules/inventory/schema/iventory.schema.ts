import { Schema } from 'mongoose';

export const IventorySchema=new Schema({
  name: { type: String, required:true },
  description: String

});


