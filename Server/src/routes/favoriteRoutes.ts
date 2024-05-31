import { Router } from "express";
import FavoriteController from "../controllers/favoriteController";
import { authenticate } from "../middlewares/auth";

const router = Router();
const controller = new FavoriteController();

router.post("/", authenticate, controller.add);
router.delete("/:id", authenticate, controller.remove);
router.get("/user/:userId", authenticate, controller.getByUser);
router.get("/store/:storeId", authenticate, controller.getByStore);
router.get("/:userId/:storeId", authenticate, controller.get);
router.put("/:id", authenticate, controller.update);

export default router;
