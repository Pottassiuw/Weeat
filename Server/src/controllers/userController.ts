import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

class UserServices {
    async getUserById(userId: Number): Promise<User | null> {
        try {
            return await prisma.user.findUnique({
                where: { id: userId }
            });
        } catch (err) {
            console.error('Error fething user', err);
            throw err;
        }
    }

    async createUsre(userData: Partial<User>): Promise<User> {
        try {
            return await prisma.user.create({ name: userData.name });
        } catch (err) {
            console.error('Error creating user', err);
            throw err;
        }
    }
}