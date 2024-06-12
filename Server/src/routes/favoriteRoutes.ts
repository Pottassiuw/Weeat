import { Router } from "express";
import FavoriteController from "../controllers/favoriteController";
import { authenticate, authorizeUser } from "../middlewares/auth";

const router = Router();
const controller = new FavoriteController();

router.post("/add", authenticate, authorizeUser, controller.add);
router.delete("/remove/:id", authenticate, authorizeUser, controller.remove);
router.get("/user", authenticate, authorizeUser, controller.getByUser);
router.get("/store", authenticate, authorizeUser, controller.getByStore);
router.get("/get", authenticate, authorizeUser, controller.get);
router.put("/update/:id", authenticate, authorizeUser, controller.update);

export default router;
