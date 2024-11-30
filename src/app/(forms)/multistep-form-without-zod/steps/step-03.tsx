import { useFormContext } from "react-hook-form";
import type { User } from "../types/user";
import { Input, InputMessage } from "@/components/ui/input";

function StepThree() {
  const { register, formState } = useFormContext<User>();
  const { errors } = formState;

  return (
    <>
      <Input
        autoFocus
        {...register("email", {
          required: "Campo obrigatório.",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Email inválido.",
          },
        })}
        type="email"
        placeholder="Email"
      />
      {errors.email && <InputMessage>{errors.email.message}</InputMessage>}
    </>
  );
}

export default StepThree;
