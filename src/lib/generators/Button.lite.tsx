import { buttonVariants } from "@/styles/button";
import { ButtonProps } from "@/types";
import { cn } from "@/utils";

export default function MyButton(props: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({
          variant: props.variant,
          size: props.size,
          rounded: props.rounded,
          width: props.width,
          className: props.className,
        })
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}
