import express from "express"
import { createUser } from "../controllers/usersC.js"

const router = express.Router()

router.post("/auth/register", createUser)


export default router