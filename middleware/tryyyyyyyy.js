import { validateLogin } from "../DAL/messagesDal.js";
import { findUsername } from "../DAL/usersDal.js";


export const validateUserExists = async (req, res, next) => {
    try {
        const { username, password } = req.body
        const { validate } = await findUsername(username, password)
        if (!validate || validate.password !== password) {
            return res.status(401).json("user not found")
        }
        next()
    } catch (err) {
        console.error(err);
    }
}