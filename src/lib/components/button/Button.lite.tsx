import { cn } from "../../utils";
import { buttonVariants } from "./button.styles";
import { ButtonProps } from "./button.types";

export default function Button(props: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({
          intent: props.intent,
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
