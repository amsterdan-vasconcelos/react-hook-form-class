"use client";

import { useForm } from "react-hook-form";

type User = {
  name: string;
  email: string;
  age: number;
  agreement: boolean;
};

function SimpleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = (data: User) => console.log(JSON.stringify(data));

  return (
    <form
      className="flex flex-col gap-4 max-w-md mx-auto p-4 border rounded-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register("name", {
          required: "Campo obrigatório.",
          minLength: { value: 3, message: "Pelo menos 3 caracteres." },
        })}
        placeholder="Name"
        className="border p-2 rounded"
      />
      {errors.name && (
        <p className="text-red-500 text-sm">{errors.name.message}</p>
      )}
      <input
        {...register("email", {
          required: "Campo obrigatório.",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Email inválido.",
          },
        })}
        placeholder="Email"
        className="border p-2 rounded"
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}
      <input
        {...register("age", {
          valueAsNumber: true,
          required: "Campo obrigatório.",
          min: { value: 18, message: "Deve ser maior ou igual à 18." },
          max: { value: 130, message: "Deve ser menor ou igual à 130." },
        })}
        type="number"
        placeholder="Age"
        className="border p-2 rounded"
      />
      {errors.age && (
        <p className="text-red-500 text-sm">{errors.age.message}</p>
      )}
      <div className="flex items-center justify-start gap-2">
        <input
          {...register("agreement", { required: "Campo obrigatório." })}
          id="agreement"
          type="checkbox"
          placeholder="Age"
          className="border p-2 rounded"
        />
        <label htmlFor="agreement">Aceitar termos de uso.</label>
      </div>
      {errors.agreement && (
        <p className="text-red-500 text-sm">{errors.agreement.message}</p>
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

export default SimpleForm;
