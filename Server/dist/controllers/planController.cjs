"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/controllers/planController.ts
var planController_exports = {};
__export(planController_exports, {
  default: () => PlanController
});
module.exports = __toCommonJS(planController_exports);

// src/services/planService.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();
var PlanService = class {
  async createPlan(planData) {
    const plan = await prisma.plan.create({
      data: {
        name: planData.name,
        price: planData.price,
        duration: planData.duration,
        type: planData.type
      }
    });
    return plan;
  }
  async updatePlan(id, data) {
    const updatePlan = await prisma.plan.update({
      where: { id },
      data
    });
    return updatePlan;
  }
  async deletePlan(id) {
    const deletePlan = await prisma.plan.delete({
      where: { id }
    });
    return deletePlan;
  }
  async getPlanById(id) {
    const get = await prisma.plan.findUnique({
      where: { id }
    });
    return get;
  }
};
var planService_default = new PlanService();

// src/controllers/planController.ts
var isError = (error) => {
  return error instanceof Error;
};
var PlanController = class {
  async create(req, res) {
    try {
      const plan = await planService_default.createPlan(req.body);
      res.status(201).json({ plan });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
  async update(req, res) {
    try {
      const plan = await planService_default.updatePlan(parseInt(req.params.id), req.body);
      res.status(201).json({ plan });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
  async delete(req, res) {
    try {
      const plan = await planService_default.deletePlan(parseInt(req.params.id));
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
  async getById(req, res) {
    try {
      const plan = await planService_default.getPlanById(parseInt(req.params.id));
      res.status(201).json({ plan });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
};
