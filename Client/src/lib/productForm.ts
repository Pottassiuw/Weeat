import { z } from "zod";

const MAX_FILE_SIZE = 10000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
export const productSchema = z
  .object({
    name: z.string().min(1, "Nome do produto é obrigatório"),
    description: z.string().min(1, "A descrição do produto é obrigatória"),
    price: z.preprocess(
      (val) => {
        const parsed = parseFloat(val as string);
        return isNaN(parsed) ? undefined : parsed;
      },
      z
        .number({
          required_error: "O preço é obrigatório e deve ser um número!",
        })
        .min(0, "O preço não pode ser negativo!")
    ),
    photo: z
      .any()
      .refine((files) => files?.length >= 1, {
        message: "O produto precisa de uma imagem!",
      })
      .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
        message: "Apenas imagens .jpg, .jpeg, .png and .webp são aceitas!",
      })
      .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
        message: "Tamanho máximo de 10MB",
      }),
  })
  .transform((field) => ({
    name: field.name.toLowerCase(),
    description: field.description.toLowerCase(),
    price: field.price,
    photo: field.photo,
  }));
