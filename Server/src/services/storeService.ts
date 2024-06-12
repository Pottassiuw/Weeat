import { PrismaClient, Store, StoreAddress } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

interface StoreRegistrationData {
  id?: number;
  name: string;
  storeName: string;
  description: string;
  email: string;
  taxpayerRegistry: number;
  password: string;
  contact: string;
  banner?: string;
  logo?: string;
  averageRating?: number;
  category: string;
}

interface StoreAddressData {
  street: string;
  city: string;
  state: string;
  zip: string;
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

  async addStoreAddress(
    id: number,
    addressData: StoreAddressData
  ): Promise<StoreAddress> {
    const address = await prisma.storeAddress.create({
      data: {
        id,
        ...addressData,
      },
    });
    return address;
  }

  async getStoreAddressesById(id: number): Promise<StoreAddress[]> {
    const addresses = await prisma.storeAddress.findMany({
      where: { id },
    });
    return addresses;
  }

  async getAllStores(): Promise<Store[]> {
    const stores = await prisma.store.findMany();
    return stores;
  }

  async updateAverageRating(storeId: number): Promise<void> {
    const products = await prisma.product.findMany({
      where: { storeId },
      select: { averageRating: true },
    });

    if (products.length === 0) {
      await prisma.store.update({
        where: { id: storeId },
        data: { averageRating: 0 },
      });
      return;
    }

    const totalRating = products.reduce(
      (acc, product) => acc + product.averageRating,
      0
    );
    const averageRating = totalRating / products.length;

    await prisma.store.update({
      where: { id: storeId },
      data: { averageRating },
    });
  }
}

export default new StoreService();
