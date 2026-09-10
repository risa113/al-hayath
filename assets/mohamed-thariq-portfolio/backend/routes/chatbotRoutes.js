import express from "express";
import { saveChat, getChats } from "../controllers/chatbotController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", saveChat);
router.get("/", protect, getChats);

export default router;
