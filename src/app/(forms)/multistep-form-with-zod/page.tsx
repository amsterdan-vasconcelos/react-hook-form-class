"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, type User } from "./schema/user";
import FormElement from "./form-element";

function SimpleForm() {
  const methods = useForm<User>({
    resolver: zodResolver(userSchema),
    mode: "all",
  });

  return (
    <FormProvider {...methods}>
      <FormElement />
    </FormProvider>
  );
}

export default SimpleForm;
