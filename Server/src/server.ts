import express, { Express } from "express";
import dotenv from "dotenv";
import userRouter from "./routes/usersRoutes";
import storeRouter from "./routes/storesRoutes";
import favoriteRouter from './routes/favoriteRoutes';
import productsRouter from './routes/productRoutes';
import plansRouter from './routes/planRoutes';
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRouter);
app.use('/favorites', favoriteRouter);
app.use('/stores', storeRouter);
app.use('/products', productsRouter );
app.use('/plans', plansRouter);

app.listen(PORT, () => {
    console.log("Done!");
})
