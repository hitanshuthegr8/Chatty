import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();
// Auth routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
// Profile routes
router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);
// Check if user is authenticated
export default router;
