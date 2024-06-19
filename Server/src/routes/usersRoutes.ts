import { Router } from "express";
import UserController from "../controllers/userController";
import { authenticate, authorizeUser } from "../middlewares/auth";

const router = Router();
const controller = new UserController();

router.post("/register", controller.register);
router.post("/login", controller.login);
router.put("/update/:id", authenticate, authorizeUser, controller.update);
router.delete("/delete/:id", authenticate, authorizeUser, controller.delete);
router.get("/get/:id", authenticate, authorizeUser, controller.getById);
router.post(
  "/:userId/favorite/:storeId",
  authenticate,
  authorizeUser,
  controller.favoriteStore
);
export default router;
