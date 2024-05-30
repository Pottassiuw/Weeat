// src/routes/userRoutes.ts

import {Router} from "express";
import userController from "../controllers/userController";
import { authenticateUser } from "../middlewares/authUser";

const router = Router();

router.post('/register', userController.register.bind(userController));
router.post('/login', userController.login.bind(userController));

// Routes that require authentication
router.post('/favorite', authenticateUser, userController.favoriteStore.bind(userController));
router.get('/:id', authenticateUser, userController.getUserById.bind(userController));
router.get('/:id/favorites', authenticateUser, userController.getUserFavorites.bind(userController));

// Routes that do not require authentication
router.delete('/:id', userController.deleteUser.bind(userController));
router.put('/:id', userController.updateUser.bind(userController));

export default router;
