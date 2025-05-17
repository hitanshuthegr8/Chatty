import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();
// Message routes
router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);
// Get messages for a specific chat
// Get users for the sidebar
router.post("/send/:id", protectRoute, sendMessage);
// Send a message to a specific chat
// Send a message to a specific chat
export default router;
