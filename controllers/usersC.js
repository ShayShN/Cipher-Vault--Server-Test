import { registerUser, findUsername, MyProfile } from "../DAL/usersDal.js";



export async function createUser(req, res) {
    try {
        const existsUsername = await findUsername(req.body.username)
        console.log("hhh", existsUsername);

        if (existsUsername.username !== req.body.username) {
            const data = {
                username: req.body.username,
                password: req.body.password,
                encryptedMessagesCount: 0,
                createdAt: new Date().toISOString()

            }
            const result = await registerUser(data)
            console.log(result);

            return res.status(201).json({
                id: result.insertedId,
                username: req.body.username
            })
        }
        else { return res.status(401).json("alrady exists") }

    } catch (err) {
        console.error(err);
    }
}

export async function finddMessagCount(req, res) {
   try {
     const found = await MyProfile(req.headers.username)
     return res.status(200).json({
         "username": req.headers.username,
         "encryptedMessagesCount": found.encryptedMessagesCount
     })
   } catch (err) {
        console.error(err);
        
   }
}