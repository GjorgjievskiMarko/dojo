import { cva } from "class-variance-authority";
export const buttonVariants = cva("inline-flex items-center justify-center gap-1 py-0 text-center whitespace-nowrap font-bold hover:border-transparent transition-transform transition-shadow focus:outline-none focus-visible:outline-none active:transform active:translate-y-[2px] shadow-lg active:shadow-md [&>svg]:size-6 [&>svg]:pb-0.5 [&>svg]:flex-1", {
  variants: {
    variant: {
      primary: "bg-primary text-primary border-primary-more hover:border-primary-more",
      secondary: "bg-info text-info border-info-more hover:border-info-more",
      "secondary-1": "bg-success text-success border-success-more hover:border-success-more",
      tertiery: "bg-warning text-warning border-warning-more hover:border-warning-more"
    },
    disabled: {
      true: "pointer-events-none opacity-80 active:translate-none select-none"
    },
    size: {
      md: "px-md text-sm py-3",
      sm: "px-3 py-[9px] text-xs"
    },
    rounded: {
      full: "rounded-full",
      md: "rounded-md",
      lg: "rounded-lg"
    },
    width: {
      default: "w-auto",
      full: "w-full flex-1"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    rounded: "full",
    disabled: false
  }
})