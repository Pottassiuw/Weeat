import { Router } from "express";
import FavoriteController from "../controllers/favoriteController";
import { authenticate, authorizeUser } from "../middlewares/auth";

const router = Router();
const controller = new FavoriteController();

router.post("/add", authenticate, authorizeUser, controller.add);
router.get("/get", authenticate, authorizeUser, controller.get);
router.delete("/remove/:id", authenticate, authorizeUser, controller.remove);
router.delete(
  "/user/:userId/store/:storeId",
  authenticate,
  authorizeUser,
  controller.deleteByUserAndStore
);
router.get("/store/:id", authenticate, authorizeUser, controller.getByStore);
router.get("/user/:id", authenticate, authorizeUser, controller.getByUser);
router.put("/update/:id", authenticate, authorizeUser, controller.update);

export default router;
