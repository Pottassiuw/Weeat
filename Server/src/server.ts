import express, { Express } from "express"
import dotenv from "dotenv"
import { centralErrorHandler } from "./middlewares/authMiddleware"
import userRouter from "./routes/usersRoutes"
dotenv.config()

const PORT = process.env.PORT || 3000

const app: Express = express()
app.use(express.json())

app.use('/users',userRouter)


app.use(centralErrorHandler)

app.listen(PORT, () => {
    console.log("Done!")
})
