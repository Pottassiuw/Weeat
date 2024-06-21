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
    information: z
      .object({
        name: z
          .string()
          .min(3, "O nome deve ter no mínimo 3 caracteres!")
          .max(30, "O nome deve ter no máximo 30 caracteres!"),
        email: z.string().email("Email inválido!"),
        numeroCell: z.string().optional(),
        password: z
          .string()
          .min(8, "Senha deve ter no mínimo 8 caracteres!")
          .max(64, "O limite de caracteres é de 64!"),
        confirmPassword: z
          .string()
          .min(8, "Senha deve ter no mínimo 8 caracteres!")
          .max(64, "O limite de caracteres é de 64!"),
      })
      .refine((pass) => pass.password == pass.confirmPassword, {
        message: "As senhas não coincidem!",
        path: ["confirmPassword"],
      }),
    address: z.object({
      cep: z.string().length(9, "Obrigatório!"),
      estado: z.string().min(1, "Obrigatório!"),
      cidade: z.string().min(1, "Obrigatório!"),
      bairro: z.string().min(1, "Obrigatório!"),
      endereco: z.string().min(1, "Obrigatório"),
      numero: z
        .string()
        .min(1, "Obrigatório!")
        .transform((val) => Number(val))
        .refine((val) => !isNaN(Number(val)), {
          message: "O campo deve ser um número!",
        }),
      complemento: z.string().optional(),
    }),
    storeinfo: z.object({
      storeName: z
        .string()
        .min(3, "O nome da loja deve ter no mínimo 3 caracteres!")
        .max(16, "O nome da loja deve ter no máximo 16! caracteres!"),
      description: z.string().min(1, "A loja deve conter uma descrição!"),
      banner: z.string().optional(),
      logo: z.string().optional(),
      category: z.string(),
      contact: z.string(),
    }),
  })
  .transform((field) => ({
    information: {
      name: field.information.name.toLowerCase(),
      email: field.information.email.toLowerCase(),
      numeroCell: field.information.numeroCell,
      password: field.information.password.toLowerCase(),
      confirmPassword: field.information.confirmPassword.toLowerCase(),
    },
    address: {
      cep: field.address.cep,
      estado: field.address.estado.toLowerCase(),
      cidade: field.address.cidade.toLowerCase(),
      bairro: field.address.bairro.toLowerCase(),
      endereco: field.address.endereco.toLowerCase(),
      numero: field.address.numero,
      complemento: field.address.complemento,
    },
    storeInfo: {
      contact: field.storeinfo.contact.toLocaleLowerCase(),
      storeName: field.storeinfo.storeName.toLocaleLowerCase(),
      description: field.storeinfo.description.toLowerCase(),
      banner: field.storeinfo.banner,
      logo: field.storeinfo.logo,
      category: field.storeinfo.category.toLowerCase(),
    },
  }));
