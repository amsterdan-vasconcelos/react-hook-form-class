import { z } from "zod";

export const schema = z.object({
  name: z.string().min(3, { message: "Mínimo de 3 caracteres." }),
  emails: z
    .array(
      z.object({
        email: z
          .string({ message: "Campo obrigatório." })
          .email({ message: "Email inválido." }),
      })
    )
    .min(1, { message: "Passe um email ou mais." }),
});
