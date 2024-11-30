import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva("text-center border-2", {
  variants: {
    variant: {
      default: "border-green-500 bg-green-500",
      finish: "border-blue-500 bg-blue-500",
      outline: "border-white",
    },
    size: {
      default: "p-2 px-4",
      full: "p-2 px-4 w-full",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = "button", variant, size, className, ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
