import { PrismaClient, Store, StoreAddress, Favorite } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

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

class StoreService {
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
