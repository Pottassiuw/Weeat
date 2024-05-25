import express, {Express, Request, Response} from "express"
import dotenv from "dotenv"
import { centralErrorHandler } from "./middlewares/errorHandle"

dotenv.config()

const PORT = process.env.PORT || 3000

const app: Express = express()
app.use(express.json())

app.use('/users', userRouter)
app.use('establishments', establishmentRouter)

app.use(centralErrorHandler)
app.listen(PORT,() => {
    console.log("Done!")
})
