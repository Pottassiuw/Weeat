import { Request, Response } from 'express';
import PlanService from '../services/planService';

const isError = (error: unknown): error is Error => {
    return error instanceof Error;
};

export default class PlanController {
    async create(req: Request, res: Response) {
        try {
            const plan = await PlanService.createPlan(req.body);
            res.status(201).json({ plan });
        } catch (error) {
            const message = isError(error) ? error.message : 'Unknown error';
            res.status(500).json({ message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const plan = await PlanService.updatePlan(parseInt(req.params.id), req.body);
            res.status(201).json({ plan })
        } catch (error) {
            const message = isError(error) ? error.message : 'Unknown error';
            res.status(500).json({ message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const plan = await PlanService.deletePlan(parseInt(req.params.id));
        } catch (error) {
            const message = isError(error) ? error.message : 'Unknown error';
            res.status(500).json({ message });
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const plan = await PlanService.getPlanById(parseInt(req.params.id));
            res.status(201).json({plan});
        } catch (error) {
            const message = isError(error) ? error.message : 'Unknown error';
            res.status(500).json({ message });
        }
    }
}