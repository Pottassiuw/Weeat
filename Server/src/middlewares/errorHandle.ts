import {Request, Response, NextFunction} from "express"

export function centralErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack); 
    res.status(err.statusCode || 500).json({ error: 'server mid error' });
  }