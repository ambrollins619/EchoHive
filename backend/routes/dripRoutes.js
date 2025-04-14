import express from "express"
import { getDrip, updateDrip } from "../controllers/dripController.js";
import { protect } from "../middleware/authMiddleware.js";
const dripRoutes = express.Router()

dripRoutes.patch('/update/:dripId/:questionId/:selectedUserId', protect, updateDrip)
dripRoutes.get('/', protect, getDrip)

export default dripRoutes;