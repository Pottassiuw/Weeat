import { Router } from "express";
import StoreController from "../controllers/storeController";
import { authenticate, authorizeStore } from "../middlewares/auth";

const router = Router();
const controller = new StoreController();

router.post("/register", controller.register);
router.post("/login", controller.login);
router.post("/address", authenticate, authorizeStore, controller.addAddress);
router.get("/address/:id", authenticate, controller.getAddressById);
router.get("/address/store/:id", authenticate, controller.getAddressByStoreId);
router.get("/", authenticate, controller.getStores);
router.get("/:id", authenticate, controller.getById);
router.put("/:id", authenticate, authorizeStore, controller.update);
router.put(
  "/address/:id",
  authenticate,
  authorizeStore,
  controller.updateAddress
);
router.get("/category/:category", authenticate, controller.getByCategory);
export default router;
