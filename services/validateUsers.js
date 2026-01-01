import { encryptMessage } from "../DAL/messagesDal.js";
import { findUsername } from "../DAL/usersDal.js";

export async function checkCreateMessage(username, password) {
    // const { username, password } = req.body
  try {
      const found =await findUsername(username, password)
      if (!found || found.password !== password) {
          throw new Error("not found user!");
          
      } else {
          return found
      }
  } catch (err) {
        console.error(err);
        
  }
}