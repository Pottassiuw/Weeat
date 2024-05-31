import express, { Express } from "express";
import dotenv from "dotenv";
import userRouter from "./routes/usersRoutes";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app: Express = express();
app.use(express.json());

app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log("Done!");
})
