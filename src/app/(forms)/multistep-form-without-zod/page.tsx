"use client";

import { FormProvider, useForm } from "react-hook-form";
import type { User } from "./types/user";
import Form from "./form";

function SimpleForm() {
  const methods = useForm<User>({
    mode: "all",
  });

  return (
    <FormProvider {...methods}>
      <Form />
    </FormProvider>
  );
}

export default SimpleForm;
