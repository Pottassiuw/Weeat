import express from "express"
import dotenv from "dotenv"
import userRouter from "./routes/users..js"
import establishmentRouter from "./routes/establishment.js"
import { centralErrorHandler } from "./middlewares/errorHandle.js"

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
