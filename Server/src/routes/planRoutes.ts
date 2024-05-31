import express from 'express';
import PlanController from '../controllers/planController';

const router = express.Router();
const controller = new PlanController();

router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.get('/:id', controller.getById);

export default router;
