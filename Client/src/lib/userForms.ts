import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(3, "Usuário deve conter pelo menos 3 caracteres!")
      .max(50, "O máximo de caracteres é de 20!"),
    email: z.string().email("Email inválido!"),
    password: z
      .string()
      .min(8, "Senha deve ter no mínimo 8 caracteres!")
      .max(64, "O limite de caracteres é de 64!"),
    confirmPassword: z
      .string()
      .min(1, "Necessário confirmar a senha!")
      .max(64, "O limite de caracteres é de 64!"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não coincidem!",
    path: ["confirmPassword"],
  });
export type TsignUpSchema = z.infer<typeof signUpSchema>;
export const updateSchema = z
  .object({
    name: z
      .string()
      .min(3, "Usuário deve conter pelo menos 3 caracteres!")
      .max(50, "O máximo de caracteres é de 20!")
      .optional(),
    email: z.string().email("Email inválido!").optional(),
    password: z
      .string()
      .min(8, "Senha deve ter no mínimo 8 caracteres!")
      .max(64, "O limite de caracteres é de 64!")
      .optional(),
    confirmPassword: z
      .string()
      .min(1, "Necessário confirmar a senha!")
      .max(64, "O limite de caracteres é de 64!")
      .optional(),
  })
  .refine(
    (pass) => {
      if (pass.password && pass.confirmPassword) {
        return pass.password == pass.confirmPassword;
      }
      return true;
    },
    {
      message: "As senhas não coincidem!",
      path: ["confirmPassword"],
    }
  );
export type TUpdateSchema = z.infer<typeof updateSchema>;
export const loginSchema = z.object({
  email: z.string().email("Email inválido!"),
  password: z.string().min(8, "Senha deve ter no mínimo 8 caracteres!"),
});

export type TloginSchema = z.infer<typeof loginSchema>;
