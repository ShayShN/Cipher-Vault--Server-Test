import express from "express"
import dotenv from "dotenv"
import routerUsers from "./routes/usersR.js"
import routerMessages from "./routes/messagesR.js"
dotenv.config()

const app = express()
const port = process.env.EXPRESS_PORT

app.use(express.json())

app.use("/api", routerUsers)
app.use("/api/messages", routerMessages)




app.listen(port, () => {
    console.log(`server running on  http://localhost:${port}`);
})