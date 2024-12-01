"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { User } from "./types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schemas/user";

function EmailArrayForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ resolver: zodResolver(schema) });
  const { fields, append, remove } = useFieldArray({ control, name: "emails" });

  const onSubmit = (data: User) => console.log(data);

  return (
    <form
      className="flex flex-col gap-4 max-w-md mx-auto p-4 border rounded-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register("name")}
        type="text"
        placeholder={"name"}
        className="border p-2 rounded w-full"
      />
      {errors.name && (
        <p className="text-red-500 text-sm">{errors.name.message}</p>
      )}

      {fields.map((field, index) => (
        <div key={field.id} className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <input
              {...register(`emails.${index}.email`)}
              type="email"
              placeholder={`0${index + 1} email`}
              className="border p-2 rounded w-full"
            />
            <button
              className="bg-red-500 text-white py-2 px-4 rounded"
              type="button"
              onClick={() => remove(index)}
            >
              Remove
            </button>
          </div>
          {errors.emails?.[index]?.email && (
            <p className="text-red-500 text-sm">
              {errors.emails?.[index].email.message}
            </p>
          )}
        </div>
      ))}
      <button
        className="bg-green-500 text-white py-2 px-4 rounded"
        type="button"
        onClick={() => append({ email: "" })}
      >
        Add email
      </button>
      {errors.emails && (
        <p className="text-red-500 text-sm">{errors.emails.message}</p>
      )}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default EmailArrayForm;
