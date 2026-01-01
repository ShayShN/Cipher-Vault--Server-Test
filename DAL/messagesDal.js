import supabase from "../db/supabaseDb.js";

export const validateLogin = async (username, password) => {
    try {
        const { data, error } = await supabase.from("messages").select("*").eq("username", username).eq("password", password).single()
        if (error) return null
        return data
    } catch (err) {
        console.error(err);
    }
}

export const encryptMessage = async (id, username, password, message, cipher_type, encrypted_text) => {
    try {
        const { data, error } = await supabase.from("messages").insert([{ "id": id, "username": username, "cipher_type": cipher_type, "encrypted_text": encrypted_text }]).select()
        if (error) return null
        return data
    } catch (err) {
        console.error(err);
    }
}

export const decryptMessage = async (id) => {
    try {
        const { data, error } = await supabase.from("messages").select("*").eq("id", id)
        if (error) return null
        return data
    } catch (err) {
        console.error(err);
    }
}

