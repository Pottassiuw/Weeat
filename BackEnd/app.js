import express from "express"
import dotenv from "dotenv"
import router from "./src/api/routes/user.js"
import { centralErrorHandler } from "./src/api/middlewares/errorHandle.js"
dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.use('/user', router)

app.use(centralErrorHandler)
app.listen(PORT,() => {
    console.log("Done!")
})
 
  
