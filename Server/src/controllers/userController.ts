import { Request, Response } from "express";
import UserService from "../services/userService";
import AuthService from "../services/authService";
import generateToken from "../services/authService";

const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};
export default class UserController {
  async register(req: Request, res: Response) {
    try {
      const user = await UserService.registerUser(req.body);
      const { password: _, ...data } = user;
      res.status(201).json(data);
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const { user, token } = await AuthService.loginUser(email, password);
      res.status(200).json({ user, token });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      if (!req.entity) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const user = await UserService.deleteUser(parseInt(req.params.id));
      res.status(200).json(user);
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      if (!req.entity) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const user = await UserService.updateUser(
        parseInt(req.params.id),
        req.body
      );
      console.log("------>", req.body);
      res.status(200).json(user);
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      if (!req.entity) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const user = await UserService.getUserById(parseInt(req.params.id));
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const { password: _, ...userData } = user;
      res.status(200).json(userData);
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }

  async favoriteStore(req: Request, res: Response) {
    const userId = parseInt(req.params.userId);
    const storeId = parseInt(req.params.storeId);
    try {
      const favorite = await UserService.favoriteStore(userId, storeId);
      return res.status(201).json({ favorite });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
}
