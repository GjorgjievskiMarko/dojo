<script lang="ts">
  import { buttonVariants } from "../../styles";
  import { ButtonProps } from "../../types";
  import { cn } from "../../utils";

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