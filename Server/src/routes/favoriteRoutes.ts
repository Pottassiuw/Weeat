import UserController from '../controllers/userController';
import { authenticate } from '../middlewares/auth';
import { Router } from 'express';
const router = Router();
const controller = new UserController();

router.post('/favorite', authenticate, controller.favorite);
router.post('/:userId/favorite/:storeId', authenticate, controller.favorite);
router.get('/:id/favorites', authenticate, controller.getFavorites);