import { Request } from 'express';

declare module 'express' {
  interface Request {
    entity?: { id: number; type: 'user' | 'store' };
  }
}