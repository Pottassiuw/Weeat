import { z } from "zod";

export const storeLoginSchema = z.object({
  email: z.string().email("Email inválido!"),
  password: z
    .string()
    .min(8, "Senha deve ter no mínimo 8 caracteres!")
    .max(64, "O limite de caracteres é de 64!"),
});

export type TstoreLoginSchema = z.infer<typeof storeLoginSchema>;

export const storeRegisterSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  password: z
    .string()
    .min(8, "Senha deve ter no mínimo 8 caracteres!")
    .max(64, "O limite de caracteres é de 64!"),
  cep: z.number().min(8, "O cep deve ter 8 caracteres!").max(8),
  storeName: z
    .string()
    .min(3, "O nome da loja deve ter no mínimo 3 caracteres!")
    .max(16, "O nome da loja deve ter no máximo 16! caracteres!"),
  description: z.string().min(1, "A loja deve conter uma descrição!"),
  contact: z.string(),
  banner: z.string().optional(),
  logo: z.string().optional(),
  averageRating: z.number(),
  category: z.string(),
});

export type Store = z.infer<typeof storeRegisterSchema>;
