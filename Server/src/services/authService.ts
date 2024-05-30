import { PrismaClient} from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const SECRET_KEY = process.env.SECRET_KEY as string;

class AuthService {

  async loginUser(email: string, password: string): Promise<{ token: string, user: any }> {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new Error('User not found');
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error('Invalid password');
    }
    const token = this.generateToken('user', user.id);
    const { password: _, ...userWithoutPassword } = user;
    return { token, user: userWithoutPassword };
  }

  async loginStore(email: string, password: string): Promise<{token: string, store: any}> {
    const store = await prisma.store.findUnique({ where: { email } });
    if (!store) {
      throw new Error('Store not found');
    }
    const validPassword = await bcrypt.compare(password, store.password);
    if (!validPassword) {
      throw new Error('Invalid password');
    }
    const token = this.generateToken('store', store.id);
    const {password:_, ...storeWithoutPassword } = store;
    return {token, store: storeWithoutPassword};
  }

  generateToken(type: 'user' | 'store', id: number): string {
    const token = jwt.sign({ type, id }, SECRET_KEY ?? "", { expiresIn: '8h' });
    return token;
  }

  verifyToken(token: string): { type: 'user' | 'store'; id: number } {
    const decodedToken = jwt.verify(token, SECRET_KEY ?? "") as { type: 'user' | 'store'; id: number };
    return decodedToken;
  }
}

export default new AuthService();
