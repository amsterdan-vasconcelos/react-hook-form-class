import { useFormContext } from "react-hook-form";
import type { User } from "../types/user";
import { Input, InputMessage } from "@/components/ui/input";

function StepFive() {
  const { register, formState } = useFormContext<User>();
  const { errors } = formState;

  return (
    <>
      <div className="flex items-center justify-start gap-2">
        <Input
          autoFocus
          {...register("agreement", { required: "Campo obrigatório." })}
          id="agreement"
          type="checkbox"
        />
        <label htmlFor="agreement">Aceitar termos de uso.</label>
      </div>
      {errors.agreement && (
        <InputMessage>{errors.agreement.message}</InputMessage>
      )}
    </>
  );
}

export default StepFive;
