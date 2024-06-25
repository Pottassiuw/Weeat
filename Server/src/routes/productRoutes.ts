import { Router } from "express";
import ProductController from "../controllers/productController";
import { authenticate } from "../middlewares/auth";

const router = Router();
const controller = new ProductController();

router.post("/", authenticate, controller.create);
router.get("/", authenticate, controller.getAll);
router.get("/store/:storeId", authenticate, controller.getInStore);
router.put("/:id", authenticate, controller.update);
router.delete("/:id", authenticate, controller.delete);
router.get("/:id", authenticate, controller.getById);

export default router;
