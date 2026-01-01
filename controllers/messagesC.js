import { encryptMessage, decryptMessage } from "../DAL/messagesDal.js"
import { checkCreateMessage } from "../services/validateUsers.js"
import { increasCount } from "../DAL/usersDal.js"


export async function encrypt(req, res) {
    try {
        const { id, username, password, message, cipher_type } = req.body
        const confirm = await checkCreateMessage(username, password)
        if (cipher_type === "reverse") {
            let encrypted_text = message.split("").reverse().join("").toUpperCase()
            const encrypted = await encryptMessage(id, username, password, message, cipher_type, encrypted_text)
            const inc = await increasCount(username)
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
        const { messageId } = req.body
        const found = await decryptMessage(messageId)
        console.log(found);

        if (!found) {
            return res.status(400).json("not found")
        }
        let decrypt = found[0].encrypted_text.split("").reverse().join("")
        return res.json({ "id": found[0].id, "encrypted_text": decrypt }
        )
    } catch (err) {
        console.error(err);

    }
}

