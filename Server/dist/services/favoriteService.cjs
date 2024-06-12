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

// src/services/favoriteService.ts
var favoriteService_exports = {};
__export(favoriteService_exports, {
  default: () => favoriteService_default
});
module.exports = __toCommonJS(favoriteService_exports);
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
