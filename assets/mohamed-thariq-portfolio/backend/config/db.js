import mongoose from "mongoose";

export default async function connectDB() {
  try {
    if (!process.env.MONGO_URI || process.env.MONGO_URI.includes("your_mongodb")) {
      console.warn("MongoDB URI not set. Backend will start, but database features need MONGO_URI.");
      return;
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
}
