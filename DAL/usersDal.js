import { connect } from "../db/mongoDB.js";

const db = await connect()

export async function findUsername(name) {
  try {
      const foundOneuser = await db.collection("users").findOne({username: name})
      console.log(foundOneuser);
      
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