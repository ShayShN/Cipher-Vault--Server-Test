import express from "express"
import { createUser, finddMessagCount } from "../controllers/usersC.js"
import { validateUserExists } from "../middleware/tryyyyyyyy.js"
const router = express.Router()


router.post("/auth/register", validateUserExists, createUser)
router.get("/users/me", finddMessagCount)

export default router