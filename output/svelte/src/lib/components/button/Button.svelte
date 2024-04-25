<script lang="ts">
  import { cn } from "../../utils";
  import { buttonVariants } from "./button.styles";
  import { ButtonProps } from "./button.types";

  export let variant: ButtonProps["variant"];
  export let size: ButtonProps["size"];
  export let rounded: ButtonProps["rounded"];
  export let width: ButtonProps["width"];
  export let className: ButtonProps["className"] = undefined;
</script>

<button
  {...$$props}
  class={cn(
    buttonVariants({
      variant: variant,
      size: size,
      rounded: rounded,
      width: width,
      className: className,
    })
  )}><slot /></button
>