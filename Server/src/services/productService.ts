import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient();

interface ProductData {
    name: string;
    description: string;
    price: number;
    photo?: string | null;
    averageRating?: number;
    storeId: number;
}

class ProductService {
    async createProduct(productData: ProductData): Promise<Product> {
        const product = await prisma.product.create({
            data: {
                ...productData,
                averageRating: productData.averageRating || 0
            }
        });
        return product;
    }

    async getProductById(productId: number): Promise<Product | null> {
        const product = await prisma.product.findUnique({
            where: { id: productId }
        });
        return product;
    }

    async updateProduct(productId: number, productData: Partial<ProductData>): Promise<Product> {
        const product = await prisma.product.update({
            where: { id: productId },
            data: {
                ...productData
            }
        });
        return product;
    }

    async deleteProduct(productId: number): Promise<Product> {
        const product = await prisma.product.delete({
            where: { id: productId }
        });
        return product;
    }

    async getAllProducts(): Promise<Product[]> {
        const products = await prisma.product.findMany();
        return products;
    }
}

export default new ProductService();
