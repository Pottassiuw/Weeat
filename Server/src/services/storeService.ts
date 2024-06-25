import { PrismaClient, Store, StoreAddress } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

type TStore = {
  name: string;
  storeName: string;
  storeNumber: string | null;
  description: string;
  email: string;
  password: string;
  contact: string;
  banner: string;
  logo: string;
  category: string;
};

type AddressData = {
  neighborhood: string;
  state: string;
  address: string;
  city: string;
  number: number;
  complement: string | null;
  zipCode: string;
};

type StoreWithoutPassword = Omit<Store, "password">;

class StoreService {
  async registerStore(
    storeData: TStore,
    addressData: AddressData
  ): Promise<Store> {
    const hashedPassword = await bcrypt.hash(storeData.password, 10);
    const store = await prisma.store.create({
      data: {
        ...storeData,
        password: hashedPassword,
        addresses: {
          create: {
            neighborhood: addressData.neighborhood,
            city: addressData.city,
            state: addressData.state,
            zipCode: addressData.zipCode,
            address: addressData.address,
            number: addressData.number,
            complement: addressData.complement,
          },
        },
      },
      include: {
        addresses: true,
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
    addressData: AddressData
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
  async getStoreAdressByStoreId(storeId: number): Promise<StoreAddress | null> {
    const address = await prisma.storeAddress.findFirst({
      where: { id: storeId },
    });
    return address;
  }
  async getAllStores(): Promise<StoreWithoutPassword[]> {
    const stores = await prisma.store.findMany({
      select: {
        id: true,
        storeNumber: true,
        name: true,
        storeName: true,
        description: true,
        email: true,
        contact: true,
        banner: true,
        logo: true,
        averageRating: true,
        createdAt: true,
        updatedAt: true,
        category: true,
      },
    });
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
  async updateStoreAddress(
    addressId: number,
    addressData: Partial<StoreAddress>
  ): Promise<StoreAddress> {
    const storeAddress = await prisma.storeAddress.update({
      where: { id: addressId },
      data: { ...addressData }, // spread the addressData object
    });
    return storeAddress;
  }
}

export default new StoreService();
