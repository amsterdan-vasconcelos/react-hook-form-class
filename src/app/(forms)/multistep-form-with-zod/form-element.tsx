import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

import type { User } from "./schema/user";
import { useStep } from "./useStep";

import { StepOne, StepTwo, StepThree, StepFour, StepFive } from "./steps";
import { Form, FormActions, FormFields } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

type StepComponent = Record<number, ReactNode>;

const stepComponent: StepComponent = {
  1: <StepOne />,
  2: <StepTwo />,
  3: <StepThree />,
  4: <StepFour />,
  5: <StepFive />,
};

function FormElement() {
  const { handleSubmit, trigger } = useFormContext<User>();
  const { step, isLastStep, nextStep, previousStep } = useStep({
    handleSubmit,
    trigger,
  });

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        nextStep();
      }}
    >
      <FormFields>{stepComponent[step]}</FormFields>
      <FormActions>
        {step > 1 && (
          <Button onClick={previousStep} variant={"outline"} size={"full"}>
            Previous
          </Button>
        )}
        <Button
          type="submit"
          variant={isLastStep ? "finish" : "default"}
          size={"full"}
        >
          {isLastStep ? "Submit" : "Next"}
        </Button>
      </FormActions>
    </Form>
  );
}

export default FormElement;
