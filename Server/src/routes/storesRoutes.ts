import {Router} from 'express';
import StoreController from '../controllers/storeController';

const router = Router();
const controller = new StoreController();

//routes that does not require authetication
router.post('/register', controller.register);
router.post('/login', controller.login);
router.put('/:id', controller.update);


//routes that does require authetication
router.get('/:id', )
export default router;