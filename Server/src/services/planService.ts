import { PrismaClient, Plan, PlanType } from "@prisma/client";

const prisma = new PrismaClient();

class PlanService {
    async createPlan(name: string, price: number, duration: number, type: PlanType): Promise<Plan> {
        const plan = await prisma.plan.create({
            data: {
                name,
                price,
                duration,
                type
            }
        });
        return plan;
    }

    async updatePlan(id: number, data: Partial<Plan>): Promise<Plan> {
        const updatePlan = await prisma.plan.update({
            where: {id},
            data
        });
        return updatePlan;
    }

    async deletePlan(id: number): Promise<Plan> {
        const deletePlan = await prisma.plan.delete({
            where: {id},
        });
        return deletePlan;
    }

    async getPlanById(id: number): Promise<Plan | null> {
        const get = await prisma.plan.findUnique({
            where: {id}
        });
        return get;
    }
}