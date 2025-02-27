import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFood: { type: [String] },
});
const UserModel = model("User",userSchema)
export default UserModel
