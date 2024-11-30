import { useFormContext } from "react-hook-form";
import type { User } from "../schema/user";
import { Input, InputMessage } from "@/components/ui/input";

function StepThree() {
  const { register, formState } = useFormContext<User>();
  const { errors } = formState;

  return (
    <>
      <Input
        autoFocus
        {...register("email")}
        type="email"
        placeholder="Email"
      />
      {errors.email && <InputMessage>{errors.email.message}</InputMessage>}
    </>
  );
}

export default StepThree;
