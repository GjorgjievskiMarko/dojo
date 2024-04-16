import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 py-0 text-center whitespace-nowrap font-bold hover:border-transparent transition-transform transition-shadow focus:outline-none focus-visible:outline-none active:transform active:translate-y-[2px] shadow-lg active:shadow-md [&>svg]:size-6 [&>svg]:pb-0.5 [&>svg]:flex-1",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border-b border-b-[6px] border-b-primary-shade hover:border-b-primary-shade ",
        secondary:
          "bg-neutral-0 text-primary border-b border-b-[6px] border-b-neutral-10 hover:border-b-neutral-10",
        ghost:
          "bg-transparent text-primary border-b border-b-[6px] border-b-transparent hover:border-b-transparent",
        accent:
          "bg-accent text-accent-foreground border-b border-b-[6px] border-b-accent-shade hover:border-b-accent-shade",
        link: "text-neutral-70 underline-offset-4 underline bg-transparent hover:text-primary",
        "link-inverted":
          "text-neutral-10 underline-offset-4 underline bg-transparent hover:text-accent",
      },
      disabled: {
        true: "pointer-events-none opacity-80 active:translate-none select-none",
      },
      size: {
        default: "px-md text-sm py-3",
        sm: "px-3 py-[9px] text-xs",
        icon: "p-3.5",
        "icon-sm": "p-2",
      },
      rounded: {
        default: "rounded-full",
        md: "rounded-md",
        lg: "rounded-lg",
      },
      width: {
        default: "w-auto",
        full: "w-full flex-1",
      },
    },
    compoundVariants: [
      {
        variant: "ghost",
        class: "shadow-none active:shadow-none",
      },
      {
        variant: "link",
        class: "shadow-none active:shadow-none",
      },
      {
        variant: "link-inverted",
        class: "shadow-none active:shadow-none",
      },
      {
        size: "sm",
        class: "[&>svg]:size-4",
      },
      {
        size: "icon",
        class: "border-none",
      },
      {
        size: "icon-sm",
        class: "border-none [&>svg]:pb-px",
      },
      {
        disabled: true,
        class: "shadow-1",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
      disabled: false,
    },
  }
);
