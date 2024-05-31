import { Request, Response, NextFunction } from 'express';
import AuthService from '../services/authService';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }

    try {
        const decoded = AuthService.verifyToken(token);
        req.entity = decoded;
        next();
    } catch {
        res.status(400).send('Invalid token.');
    }
};
