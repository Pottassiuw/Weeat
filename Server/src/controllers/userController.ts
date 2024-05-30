import { Request, Response, NextFunction } from 'express';
import UserService from '../services/userService';
import AuthService from '../services/authService';

const isError = (error: unknown): error is Error => {
    return error instanceof Error;
};

class UserController {
    async register(req: Request, res: Response) {
        try {
            const user = await AuthService.registerUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            const message = isError(error) ? error.message : 'Unknown error';
            res.status(500).json({ message });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const token = await AuthService.loginUser(email, password);
            res.status(200).json({ token });
        } catch (error) {
            const message = isError(error) ? error.message : 'Unknown error';
            res.status(500).json({ message });
        }
    }

    async favoriteStore(req: Request, res: Response) {
        try {
            if (!req.user) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            const { storeId } = req.body;
            const favorite = await UserService.favoriteStore(req.user.id, storeId);
            res.status(201).json(favorite);
        } catch (error) {
            const message = isError(error) ? error.message : 'Unknown error';
            res.status(500).json({ message });
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            if (!req.user) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            const user = await UserService.deleteUser(parseInt(req.params.id));
            res.status(200).json(user);
        } catch (error) {
            const message = isError(error) ? error.message : 'Unknown error';
            res.status(500).json({ message });
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            if (!req.user) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            const user = await UserService.updateUser(parseInt(req.params.id), req.body);
            res.status(200).json(user);
        } catch (error) {
            const message = isError(error) ? error.message : 'Unknown error';
            res.status(500).json({ message });
        }
    }

    async getUserById(req: Request, res: Response) {
        try {
            if (!req.user) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            const user = await UserService.getUserById(parseInt(req.params.id));
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            const message = isError(error) ? error.message : 'Unknown error';
            res.status(500).json({ message });
        }
    }

    async getUserFavorites(req: Request, res: Response) {
        try {
            if (!req.user) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            const favorites = await UserService.getUserFavorites(parseInt(req.params.id));
            res.status(200).json(favorites);
        } catch (error) {
            const message = isError(error) ? error.message : 'Unknown error';
            res.status(500).json({ message });
        }
    }
}

export default new UserController();
