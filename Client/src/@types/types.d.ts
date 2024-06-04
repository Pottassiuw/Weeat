import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string().min(1, "Usuário deve ser preenchido!"),
    email: z.string().email(),
    password: z.string().min(8, "Senha deve ter no mínimo 8 caracteres!"),
    confirmPassword: z.string().min(1, "Necessário confirmar a senha!"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não coincidem!",
    path: ["confirmPassword"],
  });
export type TsignUpSchema = z.infer<typeof signUpSchema>;