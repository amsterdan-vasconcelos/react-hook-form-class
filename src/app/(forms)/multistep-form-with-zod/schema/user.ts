import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string({ message: "Campo obrigatório." })
    .refine((s) => s.length >= 3 && s.length <= 30, {
      message: "Deve conter entre 3 à 30 caracteres.",
    }),
  username: z
    .string({ message: "Campo obrigatório." })
    .refine((s) => s.length >= 3 && s.length <= 30, {
      message: "Deve conter entre 3 à 30 caracteres.",
    }),
  age: z
    .number({ message: "Campo obrigatório." })
    .min(18, { message: "Deve ser maior ou igual à 18." })
    .max(130, { message: "Deve ser menor ou igual à 130." }),
  email: z
    .string({ message: "Campo obrigatório." })
    .email({ message: "Email inválido." }),
  password: z
    .object({
      value: z
        .string({ message: "Campo obrigatório." })
        .min(6, { message: "Deve conter pelo menos 6 dígitos." }),
      confirm_value: z.string(),
    })
    .refine(({ value, confirm_value }) => value === confirm_value, {
      message: "As senhas devem coincidir.",
      path: ["confirm_value"],
    }),
  agreement: z.boolean({ message: "Campo obrigatório." }).refine((b) => b),
});

export type User = z.infer<typeof userSchema>;
