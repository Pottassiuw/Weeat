import express from "express"
import dotenv from "dotenv"
import userRouter from "./src/routes/users.js"
import establishmentRouter from "./src/routes/establishment.js"
import { centralErrorHandler } from "./src/middlewares/errorHandle.js"

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.use('/users', userRouter)
app.use('establishments', establishmentRouter)

app.use(centralErrorHandler)
app.listen(PORT,() => {
    console.log("Done!")
})
