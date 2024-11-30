import { useFormContext } from "react-hook-form";
import type { User } from "../schema/user";
import { Input, InputMessage } from "@/components/ui/input";

function StepTwo() {
  const { register, formState } = useFormContext<User>();
  const { errors } = formState;

  return (
    <>
      <Input
        autoFocus
        {...register("age", { valueAsNumber: true })}
        type="number"
        placeholder="Age"
      />
      {errors.age && <InputMessage>{errors.age.message}</InputMessage>}
    </>
  );
}

export default StepTwo;
