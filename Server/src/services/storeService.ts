import { PrismaClient, Store, StoreAddress, Favorite } from '@prisma/client';

const prisma = new PrismaClient();

class StoreService {
    async updateStore(storeId: number, data: Partial<Store>): Promise<Store> {
        const store = await prisma.store.update({
            where: { id: storeId },
            data,
        });
        return store;
    }

    async deleteStore(storeId: number): Promise<Store> {
        const store = await prisma.store.delete({
            where: { id: storeId },
        });
        return store;
    }

    async getStoreById(storeId: number): Promise<Store | null> {
        const store = await prisma.store.findUnique({
            where: { id: storeId },
        });
        return store;
    }

    async getStoresByCategory(category: string): Promise<Store[]> {
        const stores = await prisma.store.findMany({
            where: { category },
        });
        return stores;
    }

    async addStoreAddress(storeId: number, addressData: Partial<StoreAddress>): Promise<StoreAddress> {
        const address = await prisma.storeAddress.create({
            data: {
                storeId,
                ...addressData,
            },
        });
        return address;
    }

    async getStoreAddresses(storeId: number): Promise<StoreAddress[]> {
        const addresses = await prisma.storeAddress.findMany({
            where: { storeId },
        });
        return addresses;
    }

    async getStoreFavorites(storeId: number): Promise<Favorite[]> {
        const favorites = await prisma.favorite.findMany({
            where: { storeId },
        });
        return favorites;
    }

    async getAllStores(): Promise<Store[]> {
        const stores = await prisma.store.findMany();
        return stores;
    }
}

export default new StoreService();
