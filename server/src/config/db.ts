import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const connectDB = await mongoose.connect(process.env.MONGODB_URL as string);
    console.log(`Connected To Mongodb Database ${connectDB.connection.host}`);
  } catch (error) {
    console.log(`Error in Mongodb ${error}`);
  }
};

export default connectDB;
