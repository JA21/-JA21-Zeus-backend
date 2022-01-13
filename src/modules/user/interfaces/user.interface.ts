import { Document } from "mongoose";

export interface User extends Document {
  readonly username: String;
  readonly password: String;
}