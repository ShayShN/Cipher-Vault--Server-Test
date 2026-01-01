import { encryptMessage, decryptMessage } from "../DAL/messagesDal.js"
import { checkCreateMessage } from "../services/validateUsers.js"


export async function encrypt(req, res) {
    try {
        const { id, username, password, message, cipher_type } = req.body
        const confirm = await checkCreateMessage(username, password)
        if (cipher_type === "reverse") {
            let encrypted_text = message.split("").reverse().join("").toUpperCase()
            const encrypted = await encryptMessage(id, username, password, message, cipher_type, encrypted_text)
            
            return res.status(201).json({
                id: id,
                cipherType: cipher_type,
                encryptedText: encrypted_text
            }
            )
        }
        else { return res.status(400).json("not good message!") }

    } catch (err) {
        console.error(err);

    }

}

export async function decrypt(req, res) {
try {
        const {id} = req.body
        const found = await decryptMessage(id)
        if (!found) {
            return res.status(400).json("not found")
        }
        return res.json({ "id": id, "decryptedText": found.encrypted_text.split("").reverse().join("").toUpperCase() }
    )
} catch (err) {
    console.error(err);
    
}
}