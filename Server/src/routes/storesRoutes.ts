import { Router } from 'express';
import StoreController from '../controllers/storeController';
import { authenticate } from '../middlewares/auth';

const router = Router();
const controller = new StoreController();

router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/address', authenticate, controller.addAddress);

router.get('/', authenticate, controller.getStores);
router.get('/:id', authenticate, controller.getById);
router.put('/:id', authenticate, controller.update);
router.get('/category/:category', authenticate, controller.getByCategory); // Changed to use URL param for category
router.get('/address/:id', authenticate, controller.getAddress);


export default router;
