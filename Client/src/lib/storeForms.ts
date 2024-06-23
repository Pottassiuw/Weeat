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
const MAX_FILE_SIZE = 10000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
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
      numero: z.string().min(1, "Obrigatório!").transform(Number),
      complemento: z.string().optional(),
    }),
    storeInfo: z.object({
      storeName: z
        .string()
        .min(3, "O nome da loja deve ter no mínimo 3 caracteres!")
        .max(16, "O nome da loja deve ter no máximo 16! caracteres!"),
      description: z.string().min(1, "A loja deve conter uma descrição!"),
      banner: z
        .any()
        .refine((files) => files?.length >= 1, {
          message: "O estabelecimento precisa de um banner!",
        })
        .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
          message: "Apenas imagens .jpg, .jpeg, .png and .webp são aceitas!",
        })
        .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
          message: `Tamanho máximo de 10MB`,
        }),
      logo: z
        .any()
        .refine((files) => files?.length >= 1, {
          message: "O estabelecimento precisa de uma logo!",
        })
        .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
          message: "Apenas imagens .jpg, .jpeg, .png and .webp são aceitas!",
        })
        .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
          message: `Tamanho máximo de 10MB`,
        }),
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
      contact: field.storeInfo.contact.toLocaleLowerCase(),
      storeName: field.storeInfo.storeName.toLocaleLowerCase(),
      description: field.storeInfo.description.toLowerCase(),
      banner: field.storeInfo.banner,
      logo: field.storeInfo.logo,
      category: field.storeInfo.category.toLowerCase(),
    },
  }));
