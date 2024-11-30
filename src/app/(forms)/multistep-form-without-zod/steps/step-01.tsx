import { useFormContext } from "react-hook-form";
import type { User } from "../types/user";
import { Input, InputMessage } from "@/components/ui/input";

function StepOne() {
  const { register, formState } = useFormContext<User>();
  const { errors } = formState;

  return (
    <>
      <Input
        autoFocus
        {...register("name", {
          required: "Campo obrigatório.",
          validate: (value) =>
            value.length >= 3 && value.length <= 30
              ? true
              : "Deve conter entre 3 à 30 caracteres.",
        })}
        placeholder="Name"
      />
      {errors.name && <InputMessage>{errors.name.message}</InputMessage>}
    </>
  );
}

export default StepOne;
