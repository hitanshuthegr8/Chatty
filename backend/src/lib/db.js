import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined. Ensure the .env file is loaded correctly.");
    }
    console.log("Connecting to MongoDB with URI:", process.env.MONGODB_URI); // Debugging log
    const conn = await mongoose.connect(process.env.MONGODB_URI); // Ensure MONGODB_URI is used
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
