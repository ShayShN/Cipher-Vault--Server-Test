import { validateLogin } from "../DAL/messagesDal.js";


export const validateUserExists = async (req, res, next) => {
    try {
        const { username, password } = req.body
        const { validate } = await validateLogin(username, password)
        if (!validate || validate.password !== password) {
            return res.status(401).json("user not found")
        }
        next()
    } catch (err) {
        console.error(err);
    }
}