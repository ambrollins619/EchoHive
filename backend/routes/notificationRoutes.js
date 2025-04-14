import express from "express"
import { readNotification } from "../controllers/notificationController.js";
import { protect } from "../middleware/authMiddleware.js";
const notificationRoutes = express.Router();


// Marking a notification as Read nothing else we can update for this notification
notificationRoutes.put('/:notificationId/read', protect, readNotification);

export default notificationRoutes;