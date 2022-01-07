import { Document } from "mongoose";

export interface Iventory extends Document {
 readonly  name:String;
 readonly description: String;
}