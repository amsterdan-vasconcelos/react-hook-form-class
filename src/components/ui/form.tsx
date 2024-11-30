import { FormHTMLAttributes, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type FormProps = FormHTMLAttributes<HTMLFormElement>;

export function Form({ className, ...props }: FormProps) {
  return (
    <>
      <form
        className={twMerge(
          "flex flex-col gap-4 max-w-md mx-auto p-4 border rounded-lg",
          className
        )}
        {...props}
      />
    </>
  );
}

type FormFieldsProps = HTMLAttributes<HTMLDivElement>;

export function FormFields({ className, ...props }: FormFieldsProps) {
  return (
    <div className={twMerge("flex flex-col gap-4", className)} {...props} />
  );
}

type FormActionsProps = HTMLAttributes<HTMLDivElement>;

export function FormActions({ className, ...props }: FormActionsProps) {
  return (
    <div
      className={twMerge("flex items-center justify-between gap-2", className)}
      {...props}
    />
  );
}
