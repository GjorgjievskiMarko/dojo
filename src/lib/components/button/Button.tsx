import { cn } from "../../utils";
import { buttonVariants } from "./button.styles";
import { ButtonProps } from "./button.types";

function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        buttonVariants({
          variant: props.variant,
          size: props.size,
          rounded: props.rounded,
          width: props.width,
          mode: props.mode,
          className: props.className,
        })
      )}
    >
      {props.children}
    </button>
  );
}

export default Button;
