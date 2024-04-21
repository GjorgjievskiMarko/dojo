import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 py-0 text-center whitespace-nowrap font-bold hover:border-transparent transition-transform transition-shadow focus:outline-none focus-visible:outline-none active:transform active:translate-y-[2px] shadow-lg active:shadow-md [&>svg]:size-6 [&>svg]:pb-0.5 [&>svg]:flex-1",
  {
    variants: {
      intent: {
        primary:
          "bg-primary text-primary border-primary-more hover:border-primary-more",
        info: "bg-info text-info border-info-more hover:border-info-more",
        success:
          "bg-success text-success border-success-more hover:border-success-more",
        warning:
          "bg-warning text-warning border-warning-more hover:border-warning-more",
        danger:
          "bg-danger text-danger border-danger-more hover:border-danger-more",
      },
      variant: {
        contained: "text-inverted border-b border-b-[6px]",
        inverted:
          " bg-inverted border-b border-b-[6px] border-opacity/50 hover:border-opacity/50",
        neutral:
          "bg-neutral border-b border-b-[6px] border-neutral-more hover:border-neutral-more",
        ghost: "bg-transparent shadow-none active:shadow-none",
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
    defaultVariants: {
      intent: "primary",
      variant: "contained",
      size: "default",
      rounded: "default",
      disabled: false,
    },
  }
);
