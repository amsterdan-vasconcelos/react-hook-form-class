import { useFormContext } from "react-hook-form";
import type { User } from "../types/user";
import { Input, InputMessage } from "@/components/ui/input";

function StepFour() {
  const { register, formState } = useFormContext<User>();
  const { errors } = formState;

  return (
    <>
      <Input
        autoFocus
        type="password"
        {...register("password", {
          required: "Campo obrigatório.",
          minLength: { value: 6, message: "Deve conter pelo menos 6 dígitos." },
        })}
        placeholder="Password"
      />
      {errors.password && (
        <InputMessage>{errors.password.message}</InputMessage>
      )}
      <Input
        type="password"
        {...register("confirm_password", {
          required: "Campo obrigatório.",
          validate: (value, { password }) =>
            value === password ? true : "As senhas devem coincidir",
        })}
        placeholder="Confirm Password"
      />
      {errors.confirm_password && (
        <InputMessage>{errors.confirm_password.message}</InputMessage>
      )}
    </>
  );
}

export default StepFour;
