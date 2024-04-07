import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: String,
  googleID: String,
  facebookID: String,
  twitterID: String,
  avatar: String,
  role: {
    type: String,
    enum: ["admin", "viewer"],
    default: "viewer",
  },
});

const User = mongoose.model("users", userSchema);
export default User;
