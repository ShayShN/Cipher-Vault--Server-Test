import express from "express"
import { encrypt } from "../controllers/messagesC.js"

const router = express.Router()


router.post("/encrypt", encrypt)

export default router