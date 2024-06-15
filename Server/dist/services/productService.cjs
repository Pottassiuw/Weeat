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

// src/services/productService.ts
var productService_exports = {};
__export(productService_exports, {
  default: () => productService_default
});
module.exports = __toCommonJS(productService_exports);
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();
var ProductService = class {
  async createProduct(productData) {
    const product = await prisma.product.create({
      data: {
        ...productData,
        averageRating: productData.averageRating || 0
      }
    });
    return product;
  }
  async getProductById(productId) {
    const product = await prisma.product.findUnique({
      where: { id: productId }
    });
    return product;
  }
  async updateProduct(productId, productData) {
    const product = await prisma.product.update({
      where: { id: productId },
      data: {
        ...productData
      }
    });
    return product;
  }
  async deleteProduct(productId) {
    const product = await prisma.product.delete({
      where: { id: productId }
    });
    return product;
  }
  async getAllProducts() {
    const products = await prisma.product.findMany();
    return products;
  }
};
var productService_default = new ProductService();
