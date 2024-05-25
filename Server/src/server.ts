import express, {Express} from "express"
import dotenv from "dotenv"
import { centralErrorHandler } from "./middlewares/authMiddleware"

dotenv.config()

const PORT = process.env.PORT || 3000

const app: Express = express()
app.use(express.json())

app.use('/users')
app.use('/stores')
app.use('/favorites')
app.use('/plans')
app.use('/auth')

app.use(centralErrorHandler)

app.listen(PORT,() => {
    console.log("Done!")
})
