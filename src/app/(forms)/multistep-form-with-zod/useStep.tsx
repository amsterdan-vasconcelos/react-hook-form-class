import { UseFormHandleSubmit, UseFormTrigger } from "react-hook-form";
import { User } from "./schema/user";
import { useCount } from "@/hooks/useCount";

type Field = keyof User;
type StepFields = Record<number, Field[]>;

const stepFields: StepFields = {
  1: ["name", "username"],
  2: ["age"],
  3: ["email"],
  4: ["password"],
  5: ["agreement"],
};

type UseStepProps = {
  handleSubmit: UseFormHandleSubmit<User>;
  trigger: UseFormTrigger<User>;
};

export const useStep = ({ handleSubmit, trigger }: UseStepProps) => {
  const {
    count: step,
    increase: increaseStep,
    decrement: previousStep,
  } = useCount();
  const isLastStep = step === Object.entries(stepFields).length;

  const processForm = async (data: User) => console.log(data);

  const nextStep = async () => {
    const isValid = await trigger(stepFields[step], { shouldFocus: true });
    if (!isValid) return;
    if (!isLastStep) return increaseStep();

    handleSubmit(processForm)();
  };

  return { step, isLastStep, nextStep, previousStep };
};
