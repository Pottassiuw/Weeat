import { Router } from "express";
import UserController from "../controllers/userController";
import { authenticate } from "../middlewares/auth";

const router = Router();
const controller = new UserController();
// Routes that do not require authentication
router.post('/register', controller.register);
router.post('/login', controller.login);
// Routes that require authentication
router.get('/:id', authenticate, controller.getById);
// Routes that do not require authentication
router.delete('/:id', controller.delete);
router.put('/:id', controller.update);

export default router;
