import { buttonVariants } from "@styles";
import { VariantProps } from "class-variance-authority";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  disabled?: boolean;
}