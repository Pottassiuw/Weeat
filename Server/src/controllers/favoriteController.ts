import { Request, Response } from "express";
import favoriteService from "../services/favoriteService";

const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};
export default class FavoriteController {
  async add(req: Request, res: Response) {
    try {
      const { userId, storeId } = req.body;
      const favorite = await favoriteService.addFavorite(userId, storeId);
      res.status(201).json({ favorite });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const favorite = await favoriteService.removeFavorite(
        parseInt(req.params.id)
      );
      res.status(201).json({ favorite });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }

  async getByUser(req: Request, res: Response) {
    try {
      const { userId } = req.body;
      const favorite = await favoriteService.getFavoritesByUser(userId);
      res.status(201).json({ favorite });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
  async getByStore(req: Request, res: Response) {
    try {
      const { storeId } = req.body;
      const favorite = await favoriteService.getFavoritesByUser(storeId);
      res.status(201).json({ favorite });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }

  async get(req: Request, res: Response) {
    try {
      const { userId, storeId } = req.body;
      const favorite = await favoriteService.getFavorite(userId, storeId);
      res.status(201).json({ favorite });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const favorite = await favoriteService.updateFavorite(
        parseInt(req.params.id),
        req.body
      );
      res.status(201).json({ favorite });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
}
