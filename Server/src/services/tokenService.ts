import jwt from "jsonwebtoken";
const SECRET_KEY = process.env.SECRET_KEY as string;

export function generateToken(type: "user" | "store", id: number): string {
  const token = jwt.sign({ type, id }, SECRET_KEY ?? "", { expiresIn: "5d" });
  return token;
}

export function verifyToken(token: string): {
  type: "user" | "store";
  id: number;
} {
  const decodedToken = jwt.verify(token, SECRET_KEY ?? "") as {
    type: "user" | "store";
    id: number;
  };
  return decodedToken;
}
