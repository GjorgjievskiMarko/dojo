import { buttonVariants } from "@/styles/button";
import { ButtonProps } from "@/types";
import { cn } from "@/utils";

function MyButton(props: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        buttonVariants({
          variant: props.variant,
          size: props.size,
          rounded: props.rounded,
          width: props.width,
          disabled: props.disabled,
          className: props.className,
        })
      )}
    >
      {props.children}
    </button>
  );
}

export default MyButton;
