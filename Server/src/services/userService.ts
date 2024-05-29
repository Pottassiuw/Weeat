
import { PrismaClient, User, Favorite, Store } from '@prisma/client';
import { AsyncLocalStorage } from 'async_hooks';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const SECRET_KEY = process.env.SECRET_KEY;

class UserService {
  async favoriteStore(userId: number, storeId: number): Promise<Favorite> {
    const favorite = await prisma.favorite.create({
      data: {
        userId,
        storeId,
      },
    });
    return favorite;
  }

  async deleteUser(userId: number): Promise<User> {
    const user = await prisma.user.delete({
      where: { id: userId },
    });
    return user;
  }

  async updateUser(userId: number, data: Partial<User>): Promise<User> {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    const user = await prisma.user.update({
      where: { id: userId },
      data,
    });
    return user;
  }


  async getUserById(userId: number): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    return user;
  }

  async getUserFavorites(userId: number): Promise<(Favorite & { store: Store })[]> {
    const favorites = await prisma.favorite.findMany({
      where: { userId },
      include: { store: true },
    });
    return favorites;
  }
}

export default new UserService();
