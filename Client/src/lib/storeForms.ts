import { z } from "zod";

//Login
export const storeLoginSchema = z.object({
  email: z.string().email("Email inválido!"),
  password: z
    .string()
    .min(8, "Senha deve ter no mínimo 8 caracteres!")
    .max(64, "O limite de caracteres é de 64!"),
});
export type TstoreLoginSchema = z.infer<typeof storeLoginSchema>;
//Register
export const storeRegisterSchema = z
  .object({
    information: z.object({
      name: z
        .string()
        .min(3, "O nome deve ter no mínimo 3 caracteres!")
        .max(30, "O nome deve ter no máximo 30 caracteres!"),
      email: z.string().email("Email inválido!"),
      password: z
        .string()
        .min(8, "Senha deve ter no mínimo 8 caracteres!")
        .max(64, "O limite de caracteres é de 64!"),
      confirmPassword: z
        .string()
        .min(8, "Senha deve ter no mínimo 8 caracteres!")
        .max(64, "O limite de caracteres é de 64!"),
    }),
    address: z.object({
      cep: z
        .string()
        .length(9, "O cep deve ter no mínimo 9 caracteres!")
        .transform((val) => Number(val))
        .refine((val) => !isNaN(Number(val)), {
          message: "O cep deve ser um número!",
        }),
      bairro: z.string().min(1, "Obrigatório!"),
      endereco: z.string().min(1, "Obrigatório"),
      numero: z.number().optional(),
      complemento: z.string().optional(),
    }),
    storeName: z
      .string()
      .min(3, "O nome da loja deve ter no mínimo 3 caracteres!")
      .max(16, "O nome da loja deve ter no máximo 16! caracteres!"),
    description: z.string().min(1, "A loja deve conter uma descrição!"),
    banner: z.string().optional(),
    logo: z.string().optional(),
    averageRating: z.number(),
    category: z.string(),
  })
  .transform((field) => ({
    information: {
      name: field.information.name.toLowerCase(),
      email: field.information.email.toLowerCase(),
      password: field.information.password.toLowerCase(),
      confirmPassword: field.information.confirmPassword.toLowerCase(),
    },
    address: {
      cep: field.address.cep,
      bairro: field.address.bairro.toLowerCase(),
      endereco: field.address.endereco.toLowerCase(),
      numero: field.address.numero,
      complemento: field.address.complemento,
    },
    storeName: field.storeName.toLowerCase(),
    description: field.description.toLowerCase(),
    banner: field.banner,
    logo: field.logo,
    averageRating: field.averageRating,
    category: field.category.toLowerCase(),
  }));
