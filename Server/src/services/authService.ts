// authService.ts

import { PrismaClient, User, Store } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const SECRET_KEY = process.env.SECRET_KEY;

interface UserRegistrationData {
  name: string;
  email: string;
  password: string;
}

interface StoreRegistrationData {
  name: string;
  storeName: string;
  description: string;
  email: string;
  taxpayerRegistry: number;
  password: string;
  contact: string;
  category: string;
  banner?: string;
  logo?: string;
  averageRating?: number;
}

class AuthService {
  async registerUser(userData: UserRegistrationData): Promise<User> {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = await prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
      },
    });
    return user;
  }

  async loginUser(email: string, password: string): Promise<string> {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new Error('User not found');
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error('Invalid password');
    }
    const token = this.generateToken('user', user.id);
    return token;
  }
  
  async logoutUser(token: string): Promise<void> {
    const decodedTokem = jwt.verify(token, SECRET_KEY) as { userId: number };
    const userId = decodedTokem.userId;
  }


  async registerStore(storeData: StoreRegistrationData): Promise<Store> {
    const hashedPassword = await bcrypt.hash(storeData.password, 10);
    const store = await prisma.store.create({
      data: {
        ...storeData,
        password: hashedPassword,
        averageRating: storeData.averageRating || 0,
      },
    });
    return store;
  }

  async loginStore(email: string, password: string): Promise<string> {
    const store = await prisma.store.findUnique({ where: { email } });
    if (!store) {
      throw new Error('Store not found');
    }
    const validPassword = await bcrypt.compare(password, store.password);
    if (!validPassword) {
      throw new Error('Invalid password');
    }
    const token = this.generateToken('store', store.id);
    return token;
  }

  generateToken(type: 'user' | 'store', id: number): string {
    const token = jwt.sign({ type, id }, SECRET_KEY, { expiresIn: '1h' });
    return token;
  }

  verifyToken(token: string): { type: 'user' | 'store'; id: number } {
    const decodedToken = jwt.verify(token, SECRET_KEY) as { type: 'user' | 'store'; id: number };
    return decodedToken;
  }
}

export default new AuthService();
