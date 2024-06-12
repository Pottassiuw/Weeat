import { PrismaClient, Favorite, Store, User } from "@prisma/client";

const prisma = new PrismaClient();

class FavoriteService {
  async addFavorite(userId: number, storeId: number): Promise<Favorite> {
    const favorite = await prisma.favorite.create({
      data: {
        userId,
        storeId,
      },
    });
    return favorite;
  }

  async removeFavorite(favoriteId: number): Promise<Favorite> {
    const favorite = await prisma.favorite.delete({
      where: { id: favoriteId },
    });
    return favorite;
  }

  async getFavoritesByUser(
    userId: number
  ): Promise<(Favorite & { store: Store })[]> {
    const favorites = await prisma.favorite.findMany({
      where: { userId },
      include: {
        store: true,
      },
    });
    return favorites;
  }

  async getFavoritesByStore(
    storeId: number
  ): Promise<(Favorite & { user: User })[]> {
    const favorites = await prisma.favorite.findMany({
      where: { storeId },
      include: { user: true },
    });
    return favorites;
  }

  async getFavorite(userId: number, storeId: number): Promise<Favorite | null> {
    const favorite = await prisma.favorite.findFirst({
      where: {
        userId,
        storeId,
      },
    });
    return favorite;
  }

  async updateFavorite(
    favoriteId: number,
    updateData: Partial<Favorite>
  ): Promise<Favorite> {
    const favorite = await prisma.favorite.update({
      where: { id: favoriteId },
      data: updateData,
    });
    return favorite;
  }
}

export default new FavoriteService();
