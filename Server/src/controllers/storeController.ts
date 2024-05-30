import {Request, Response} from 'express';
import AuthService from '../services/authService';
import StoreService from '../services/storeService';

const isError = (error: unknown): error is Error => {
    return error instanceof Error;
};

export default class StoreController {
    async register(req: Request, res: Response) {
        try {
            const store = await StoreService.registerStore(req.body);
            const {password: _, ...storeData} = store;
            return res.status(201).json(storeData);
        }catch (error) {
            const message = isError(error) ? error.message : 'Unknown error';
            res.status(500).json({ message });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const {email, password} = req.body;
            const {token, store} = await AuthService.loginStore(email, password);
            res.status(201).json({store, token});
        } catch (error) {
            const message = isError(error) ? error.message : 'Unknown error';
            res.status(500).json({ message });
        }
    }

    async update(id:number, req: Request, res: Response) {
        
    }
}
