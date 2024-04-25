import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 py-0 whitespace-nowrap text-center font-semibold hover:border-transparent transition-transform transition-shadow focus:outline-none focus-visible:outline-none active:transform active:translate-y-[2px] [&>svg]:size-6 [&>svg]:pb-0.5 [&>svg]:flex-1",
  {
    variants: {
      variant: {
        primary: `bg-purple-60 text-white border-b border-b-[6px] border-purple-100/30 hover:border-purple-100/10 disabled:text-white/50 shadow-2 active:shadow-1 
          dark:bg-teal-50 dark:text-purple-60 dark:border-teal-100/30 dark:border-purple-100/20 dark:hover:border-purple-100/20 dark:disabled:text-purple-60/50`,
        secondary: `bg-grey-0 border-b border-purple-100/10 border-b-[6px] hover:border-purple-100/10 text-purple-60 disabled:text-purple-60/50 shadow-2 active:shadow-1
          dark:bg-purple-80 dark:border-purple-100/20 dark:hover:border-purple-100/20 dark:text-white dark:disabled:text-white/50`,
        "secondary-2": `bg-white border-b border-purple-100/10 border-b-[6px] hover:border-purple-100/10 text-purple-60 disabled:text-purple-60/50 shadow-2 active:shadow-1
          dark:bg-purple-60 dark:text-white dark:border-purple-100/20 dark:hover:border-purple-100/20 dark:disabled:text-white/50`,
        tertiery: `bg-transparent text-purple-60 border-b border-b-[6px] border-transparent hover:border-transparent disabled:text-purple-60/50
          dark:text-white disabled:text-white/50`,
        link: `text-grey-50 underline hover:text-purple-60
        dark:text-purple-0 dark:hover:text-teal-50`,
      },
      disabled: {
        true: "pointer-events-none active:translate-none select-none",
      },
      size: {
        default: "py-xs px-lg",
        sm: "py-2xs px-xs",
      },
      rounded: {
        full: "rounded-full",
        md: "rounded-md",
      },
      width: {
        default: "w-auto",
        full: "w-full flex-1",
      },
      mode: {
        dark: true,
        false: false,
      },
    },
    compoundVariants: [
      {
        mode: "dark",
        class: "dark",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "default",
      rounded: "full",
      mode: false,
      disabled: false,
    },
  }
);
