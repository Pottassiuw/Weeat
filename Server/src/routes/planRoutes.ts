import express from "express";
import PlanController from "../controllers/planController";
import { authorizeStore } from "../middlewares/auth";
const router = express.Router();
const controller = new PlanController();

router.post("/", authorizeStore, controller.create);
router.put("/:id", authorizeStore, controller.update);
router.delete("/:id", authorizeStore, controller.delete);
router.get("/:id", authorizeStore, controller.getById);

export default router;
