import { useFormContext } from "react-hook-form";
import type { User } from "../schema/user";
import { Input, InputMessage } from "@/components/ui/input";

function StepFour() {
  const { register, formState } = useFormContext<User>();
  const { errors } = formState;

  return (
    <>
      <Input
        autoFocus
        type="password"
        {...register("password.value")}
        placeholder="Password"
      />
      {errors.password?.value && (
        <InputMessage>{errors.password.value.message}</InputMessage>
      )}
      <Input
        autoFocus
        type="password"
        {...register("password.confirm_value")}
        placeholder="Confirm Password"
      />
      {errors.password?.confirm_value && (
        <InputMessage>{errors.password.confirm_value.message}</InputMessage>
      )}
    </>
  );
}

export default StepFour;
