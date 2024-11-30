import { forwardRef, HTMLAttributes, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", className, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge("border p-2 rounded", className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

type InputMessageProps = HTMLAttributes<HTMLParagraphElement>;

export function InputMessage({ className, ...props }: InputMessageProps) {
  return (
    <p
      className={twMerge("text-red-500 text-sm -mt-3 -mb-2", className)}
      {...props}
    />
  );
}
