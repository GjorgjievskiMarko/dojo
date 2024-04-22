import * as React from "react";
import { cn } from "../../utils";
import { buttonVariants } from "./button.styles";
import { ButtonProps } from "./button.types";

function Button(props: ButtonProps) {
  return (
    <button
      {...props}
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
    >
      {props.children}
    </button>
  );
}

export default Button;
