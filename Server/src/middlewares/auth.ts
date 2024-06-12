import { Request, Response, NextFunction } from "express";
import AuthService from "../services/authService";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "No token Provided!" });
  }

  let token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token does not exists" });
  }
  try {
    const decodedToken = AuthService.verifyToken(token);
    req.entity = { id: decodedToken.id, type: decodedToken.type };
    next();
  } catch (error) {
    return res.status(401).json({ message: "Your token is Wrong!" });
  }
};

export const authorizeUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.entity?.type !== "user") {
    return res.status(403).json({ message: "Access denied, users Only!" });
  }
  next();
};

export const authorizeStore = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.entity?.type !== "store") {
    return res.status(403).json({ message: "Access denied, stores Only!" });
  }
  next();
};
