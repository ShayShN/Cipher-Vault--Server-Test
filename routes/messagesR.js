import express from "express"
import { encrypt, decrypt } from "../controllers/messagesC.js"

const router = express.Router()


router.post("/encrypt", encrypt)
router.post("/decrypt", decrypt)

export default router