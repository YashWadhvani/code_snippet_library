import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Connection Successful! Host : ${conn.connection.host}.`);
  } catch (error) {
    console.log(`Error in Connection!! Error : ${error}.`);
  }
};

export default connectDB;
