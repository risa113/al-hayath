import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, default: "Web Development" },
    description: { type: String, required: true },
    tech: [{ type: String }],
    liveUrl: { type: String, default: "" },
    githubUrl: { type: String, default: "" }
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
