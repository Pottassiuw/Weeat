
import { PrismaClient, User, Favorite, Store } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

interface UserRegistrationData {
  id?: number;
  name: string;
  email: string;
  password: string;
}

class UserService {
  async registerUser(userData: UserRegistrationData): Promise<User> {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = await prisma.user.create({
      data: {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
      },
    });
    return user;
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

}

export default new UserService();
