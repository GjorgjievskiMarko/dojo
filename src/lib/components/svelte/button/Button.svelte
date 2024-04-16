<script lang="ts">
  import { buttonVariants } from "@/styles/button";
  import { cn } from "@/utils";
  import { ButtonProps } from "@/types";

  export let variant: ButtonProps["variant"];
  export let size: ButtonProps["size"];
  export let rounded: ButtonProps["rounded"];
  export let width: ButtonProps["width"];
</script>

<button
  {...$$restProps}
  class={cn(
    buttonVariants({
      variant: variant,
      size: size,
      rounded: rounded,
      width: width,
      className: $$props.class,
    })
  )}><slot /></button
>
