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

    async updatePlan(planId: number, data: Partial<Plan>): Promise<Plan> {
        const updatePlan = await prisma.plan.update({
            where: {id: planId},
            data
        });
        return updatePlan;
    }

    async deletePlan(planId: number): Promise<Plan> {
        const deletePlan = await prisma.plan.delete({
            where: {id: planId},
        });
        return deletePlan;
    }

    async getPlanById(planId: number): Promise<Plan | null> {
        const get = await prisma.plan.findUnique({
            where: {id: planId}
        });
        return get;
    }
}