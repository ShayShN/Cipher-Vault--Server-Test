import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const port = process.env.EXPRESS_PORT

app.use(express.json())

// app.use("/", routerUsers)
// app.use("/", routerMessage)



app.listen(port, () => {
    console.log(`server running on  http://localhost:${port}`);
})