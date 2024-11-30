import { useFormContext } from "react-hook-form";
import type { User } from "../types/user";
import { Input, InputMessage } from "@/components/ui/input";

function StepTwo() {
  const { register, formState } = useFormContext<User>();
  const { errors } = formState;

  return (
    <>
      <Input
        autoFocus
        {...register("age", {
          valueAsNumber: true,
          required: "Campo obrigatório.",
          min: { value: 18, message: "Deve ser maior ou igual à 18." },
          max: { value: 130, message: "Deve ser menor ou igual à 130." },
        })}
        type="number"
        placeholder="Age"
      />
      {errors.age && <InputMessage>{errors.age.message}</InputMessage>}
    </>
  );
}

export default StepTwo;
