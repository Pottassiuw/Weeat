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

// src/controllers/favoriteController.ts
var favoriteController_exports = {};
__export(favoriteController_exports, {
  default: () => FavoriteController
});
module.exports = __toCommonJS(favoriteController_exports);

// src/services/favoriteService.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();
var FavoriteService = class {
  async addFavorite(userId, storeId) {
    const favorite = await prisma.favorite.create({
      data: {
        userId,
        storeId
      }
    });
    return favorite;
  }
  async removeFavorite(favoriteId) {
    const favorite = await prisma.favorite.delete({
      where: { id: favoriteId }
    });
    return favorite;
  }
  async getFavoritesByUser(userId) {
    const favorites = await prisma.favorite.findMany({
      where: { userId },
      include: {
        store: true
      }
    });
    return favorites;
  }
  async getFavoritesByStore(storeId) {
    const favorites = await prisma.favorite.findMany({
      where: { storeId },
      include: { user: true }
    });
    return favorites;
  }
  async getFavorite(userId, storeId) {
    const favorite = await prisma.favorite.findFirst({
      where: {
        userId,
        storeId
      }
    });
    return favorite;
  }
  async updateFavorite(favoriteId, updateData) {
    const favorite = await prisma.favorite.update({
      where: { id: favoriteId },
      data: updateData
    });
    return favorite;
  }
};
var favoriteService_default = new FavoriteService();

// src/controllers/favoriteController.ts
var isError = (error) => {
  return error instanceof Error;
};
var FavoriteController = class {
  async add(req, res) {
    try {
      const { userId, storeId } = req.body;
      const favorite = await favoriteService_default.addFavorite(userId, storeId);
      res.status(201).json({ favorite });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
  async remove(req, res) {
    try {
      const favorite = await favoriteService_default.removeFavorite(parseInt(req.params.id));
      res.status(201).json({ favorite });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
  async getByUser(req, res) {
    try {
      const { userId } = req.body;
      const favorite = await favoriteService_default.getFavoritesByUser(userId);
      res.status(201).json({ favorite });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
  async getByStore(req, res) {
    try {
      const { storeId } = req.body;
      const favorite = await favoriteService_default.getFavoritesByUser(storeId);
      res.status(201).json({ favorite });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
  async get(req, res) {
    try {
      const { userId, storeId } = req.body;
      const favorite = await favoriteService_default.getFavorite(userId, storeId);
      res.status(201).json({ favorite });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
  async update(req, res) {
    try {
      const favorite = await favoriteService_default.updateFavorite(parseInt(req.params.id), req.body);
      res.status(201).json({ favorite });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
};
