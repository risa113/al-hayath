import ChatMessage from "../models/ChatMessage.js";

export async function saveChat(req, res) {
  try {
    const chat = await ChatMessage.create(req.body);
    res.status(201).json(chat);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function getChats(req, res) {
  try {
    const chats = await ChatMessage.find().sort({ createdAt: -1 }).limit(100);
    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
