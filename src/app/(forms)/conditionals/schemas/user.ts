import { z } from "zod";

export const schema = z
  .object({
    CPF: z
      .string({ message: "Campo obrigatório." })
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "CPF inválido." }),
    hasCNPJ: z.boolean(),
    CNPJ: z.string().optional(),
  })
  .refine(
    ({ hasCNPJ, CNPJ }) => {
      if (!hasCNPJ) return true;
      if (/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(CNPJ as string))
        return true;
    },
    {
      message: "CNPJ inválido.",
      path: ["CNPJ"],
    }
  );
