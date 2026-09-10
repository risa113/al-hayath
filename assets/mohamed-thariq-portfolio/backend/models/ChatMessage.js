import mongoose from "mongoose";

const chatMessageSchema = new mongoose.Schema(
  {
    question: { type: String, required: true, trim: true },
    answer: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

export default mongoose.model("ChatMessage", chatMessageSchema);
