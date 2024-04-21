import * as React from "react";
import { buttonVariants } from "../styles";
import { ButtonProps } from "../types";
import { cn } from "../utils";

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
          className: props.className,
        })
      )}
    >
      {props.children}
    </button>
  );
}

export default Button;
