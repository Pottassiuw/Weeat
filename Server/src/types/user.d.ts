import { Request } from 'express';

declare module 'express' {
  interface Request {
    user?: { id: number; type: 'user' | 'store' }; // Adjust based on what your token contains
  }
}