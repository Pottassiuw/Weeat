import { Router } from "express";
import ProductController from "../controllers/productController";
import { authenticate } from "../middlewares/auth";

const router = Router();
const controller = new ProductController();

router.post("/", authenticate, controller.create);
router.put("/:id", authenticate, controller.update);
router.delete("/:id", authenticate, controller.delete);
router.get("/:id", authenticate, controller.getById);
router.get("/", authenticate, controller.getAll);

export default router;