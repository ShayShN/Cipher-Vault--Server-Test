import { connect } from "../db/mongoDB.js";

const db = await connect()

export async function findUsername(name, password) {
  try {
    const foundOneuser = await db.collection("users").findOne({ username: name, password: password })
    return foundOneuser;
  } catch (err) {
    console.error(err);

  }

}

export async function registerUser(data) {
  try {
    const result = await db.collection("users").insertOne(data)
    return result
  } catch (err) {
    console.error(err);
  }
}

export const MyProfile = async (username) => {
  try {
    const result = await db.collection("users").findOne({ username: username })
    return result
  } catch (err) {
    console.error(err);
  }
}

export const increasCount = async (username) => {
  try {
    const result = await db.collection("users").updateOne({ username: username }, { $inc: { encryptedMessagesCount: 1} })
    return result
  } catch (err) {
    console.error(err);

  }
}  