import { useFormContext } from "react-hook-form";
import type { User } from "../schema/user";
import { Input, InputMessage } from "@/components/ui/input";

function StepOne() {
  const { register, formState } = useFormContext<User>();
  const { errors } = formState;

  return (
    <>
      <Input autoFocus {...register("name")} placeholder="Name" />
      {errors.name && <InputMessage>{errors.name.message}</InputMessage>}

      <Input {...register("username")} placeholder="Username" />
      {errors.username && (
        <InputMessage>{errors.username.message}</InputMessage>
      )}
    </>
  );
}

export default StepOne;
