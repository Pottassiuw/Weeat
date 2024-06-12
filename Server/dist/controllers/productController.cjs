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

// src/controllers/productController.ts
var productController_exports = {};
__export(productController_exports, {
  default: () => ProductController
});
module.exports = __toCommonJS(productController_exports);

// src/services/productService.ts
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

// src/controllers/productController.ts
var isError = (error) => {
  return error instanceof Error;
};
var ProductController = class {
  async create(req, res) {
    const body = req.body;
    try {
      const product = await productService_default.createProduct(body);
      res.status(201).json({ product });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
  async update(req, res) {
    const body = req.body;
    const id = parseInt(req.params.id);
    try {
      const product = await productService_default.updateProduct(id, body);
      res.status(201).json({ product });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
  async delete(req, res) {
    const id = parseInt(req.params.id);
    try {
      const product = await productService_default.deleteProduct(id);
      res.status(201).json({ product });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
  async getById(req, res) {
    const id = parseInt(req.params.id);
    try {
      const product = await productService_default.getProductById(id);
      res.status(201).json({ id });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
  async getAll(req, res) {
    try {
      const product = await productService_default.getAllProducts();
      res.status(201).json({ product });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
};
