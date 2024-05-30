import { Router } from "express";
import UserController from "../controllers/userController";
import { authenticateUser } from "../middlewares/authUser";

const router = Router();
const controller = new UserController();
// Routes that do not require authentication
router.post('/register', controller.register);
router.post('/login', controller.login);
// Routes that require authentication
router.post('/favorite', authenticateUser, controller.favoriteStore);
router.get('/:id', authenticateUser, controller.getUserById);
router.get('/:id/favorites', authenticateUser, controller.getUserFavorites);
// Routes that do not require authentication
router.delete('/:id', controller.deleteUser);
router.put('/:id', controller.updateUser);

export default router;
