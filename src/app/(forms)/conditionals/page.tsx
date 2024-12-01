"use client";

import { useForm } from "react-hook-form";
import { User } from "./types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schemas/user";
import { formatCNPJ, formatCPF } from "@/utils/masks";

function ConditionalsForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User>({ resolver: zodResolver(schema) });

  const hasCNPJ = watch("hasCNPJ");

  const onSubmit = (data: User) => console.log(JSON.stringify(data));

  return (
    <form
      className="flex flex-col gap-4 max-w-md mx-auto p-4 border rounded-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        autoFocus
        {...register("CPF")}
        onInput={(e) =>
          (e.currentTarget.value = formatCPF(e.currentTarget.value))
        }
        placeholder="CPF"
        className="border p-2 rounded"
      />
      {errors.CPF && (
        <p className="text-red-500 text-sm">{errors.CPF.message}</p>
      )}
      <div className="flex gap-2">
        <input
          {...register("hasCNPJ")}
          type="checkbox"
          id="hasCNPJ"
          className="border p-2 rounded"
        />
        <label htmlFor="hasCNPJ">Tem CNPJ?</label>
      </div>
      {errors.hasCNPJ && (
        <p className="text-red-500 text-sm">{errors.hasCNPJ.message}</p>
      )}

      {hasCNPJ && (
        <>
          <input
            {...register("CNPJ")}
            onInput={(e) =>
              (e.currentTarget.value = formatCNPJ(e.currentTarget.value))
            }
            placeholder="CNPJ"
            className="border p-2 rounded"
          />
          {errors.CNPJ && (
            <p className="text-red-500 text-sm">{errors.CNPJ.message}</p>
          )}
        </>
      )}

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}

export default ConditionalsForm;
