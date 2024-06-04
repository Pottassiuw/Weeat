import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8, "Senha Deve ter no mínimo 8 caracteres!"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não coincidem!",
    path: ["confirmPassword"],
  });
export type TsignUpSchema = z.infer<typeof signUpSchema>;