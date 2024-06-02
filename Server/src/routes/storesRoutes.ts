import { Router } from 'express';
import StoreController from '../controllers/storeController';
import { authenticate, authorizeStore } from '../middlewares/auth';

const router = Router();
const controller = new StoreController();

router.post('/register', controller.register);
router.post('/login', controller.login);

router.post('/address', authenticate, authorizeStore, controller.addAddress);
router.get('/address/:id', authenticate, authorizeStore, controller.getAddress);

router.get('/', authenticate, authorizeStore, controller.getStores);
router.get('/:id', authenticate, authorizeStore, controller.getById);
router.put('/:id', authenticate, authorizeStore, controller.update);
router.get('/category/:category', authenticate, authorizeStore, controller.getByCategory);

export default router;
