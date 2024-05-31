import { Request, Response } from 'express';
import AuthService from '../services/authService';
import StoreService from '../services/storeService';
const isError = (error: unknown): error is Error => {
    return error instanceof Error;
};

export default class StoreController {
    async register(req: Request, res: Response) {
        try {
            const store = await StoreService.registerStore(req.body);
            const { password: _, ...storeData } = store;
            return res.status(201).json(storeData);
        } catch (error) {
            const message = isError(error) ? error.message : 'Unknown error';
            res.status(500).json({ message });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const { token, store } = await AuthService.loginStore(email, password);
            res.status(201).json({ store, token });
        } catch (error) {
            const message = isError(error) ? error.message : 'Unknown error';
            res.status(500).json({ message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            if (!req.entity) {
                return res.status(500).json({ error: "Unauthorized" });
            }
            const store = await StoreService.updateStore(parseInt(req.params.id), req.body);
            res.status(201).json({ store });
        } catch (error) {
            const message = isError(error) ? error.message : 'Unknown error';
            res.status(500).json({ message });
        }
    }

    async getById(req: Request, res: Response) {
        try {
            if (!req.entity) {
                return res.status(500).json({ error: "Unauthorized" });
            }
            const store = await StoreService.getStoreById(parseInt(req.params.id));
            res.status(201).json({ store });
        } catch (error) {
            const message = isError(error) ? error.message : 'Unknown error';
            res.status(500).json({ message });
        }
    }

    async getByCategory(req: Request, res: Response) {
        try {
            if (!req.entity) {
                return res.status(500).json({ error: "Unauthorized" });
            }
            const { category } = req.body;
            const store = await StoreService.getStoresByCategory(category);
            res.status(201).json({ store });
        } catch (error) {
            const message = isError(error) ? error.message : 'Unknown error';
            res.status(500).json({ message });
        }
    }

    async addAddress(req: Request, res: Response) {
        try {
            if (!req.entity) {
                return res.status(500).json({ error: "Unauthorized" });
            }
            const { storeId, addressData } = req.body;
            const store = await StoreService.addStoreAddress(parseInt(storeId), addressData);
            res.status(201).json({ store });
        } catch (error) {
            const message = isError(error) ? error.message : 'Unknown error';
            res.status(500).json({ message });
        }
    }

    async getAddress(req: Request, res: Response) {
        try {
            if (!req.entity) {
                return res.status(500).json({ error: "Unauthorized" });
            }
            const store = await StoreService.getStoreAddressesById(parseInt(req.params.id));
            res.status(201).json({ store });
        } catch (error) {
            const message = isError(error) ? error.message : 'Unknown error';
            res.status(500).json({ message });
        }
    }

    async getStores(req: Request, res: Response){
        try {
            if (!req.entity) {
                return res.status(500).json({ error: "Unauthorized" });
            }
            const store = await StoreService.getAllStores();
            res.status(201).json({ store });
        } catch (error) {
            const message = isError(error) ? error.message : 'Unknown error';
            res.status(500).json({ message });
        }
    }

}
