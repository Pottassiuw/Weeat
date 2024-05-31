import { Router } from "express";
import UserController from "../controllers/userController";
import { authenticate } from "../middlewares/auth";

const router = Router();
const controller = new UserController();

router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/:id', authenticate, controller.getById);
router.delete('/:id', authenticate, controller.delete);
router.put('/:id', authenticate, controller.update);

export default router;
