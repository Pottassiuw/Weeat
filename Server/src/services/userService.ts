import { PrismaClient, User, Favorite, Store } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

interface UserRegistrationData {
  id?: number;
  name: string;
  email: string;
  password: string;
  userAddress?: number[];
}

interface UserFunctions {
  favorites?: number[];
  productReview?: number[];
}

class UserService {
  async registerUser(userData: UserRegistrationData): Promise<User> {
    try {
      if (!userData.name || !userData.email || !userData.password) {
        throw new Error("Name, email, and password are required.");
      }
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      const user = await prisma.user.create({
        data: {
          id: userData.id,
          name: userData.name,
          email: userData.email,
          password: hashedPassword,
          UserAddress: userData.userAddress
            ? {
                connect: userData.userAddress.map((id) => ({ id })),
              }
            : undefined,
        },
      });
      return user;
    } catch (error) {
      console.error("Error registering user:", error);
      throw new Error("Failed to register user.");
    }
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

  async favoriteStore(userId: number, storeId: number): Promise<Favorite> {
    try {
      // Check if the user and store exist
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });
      const store = await prisma.store.findUnique({
        where: { id: storeId },
      });

      if (!user) {
        throw new Error("User not found.");
      }

      if (!store) {
        throw new Error("Store not found.");
      }

      // Check if the store is already favorited by the user
      const existingFavorite = await prisma.favorite.findFirst({
        where: {
          userId,
          storeId,
        },
      });

      if (existingFavorite) {
        throw new Error("Store already favorited.");
      }

      // Create the favorite relationship
      const favorite = await prisma.favorite.create({
        data: {
          user: { connect: { id: userId } },
          store: { connect: { id: storeId } },
        },
      });

      return favorite;
    } catch (error) {
      console.error("Error favoriting store:", error);
      throw new Error("Failed to favorite store.");
    }
  }
}

export default new UserService();
