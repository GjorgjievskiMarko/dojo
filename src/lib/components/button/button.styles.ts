import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center h-fit justify-center gap-2xs py-0 whitespace-nowrap hover:border-transparent transition-transform transition-shadow focus:outline-none focus-visible:outline-none active:transform active:translate-y-[2px] [&>svg]:flex-1",
  {
    variants: {
      variant: {
        primary: `bg-purple-60 text-white border-b border-purple-100a30 hover:border-purple-100a30 disabled:text-whitea50 elevation-2 active:elevation-1 
          dark:bg-teal-50 dark:text-purple-60 dark:border-purple-100a30 dark:border-purple-100a20 dark:hover:border-purple-100a20 dark:disabled:text-purple-60a50`,
        secondary: `bg-grey-0 border-b border-purple-100a10 hover:border-purple-100a10 text-purple-60 disabled:text-purple-60a50 elevation-2 active:elevation-1
          dark:bg-purple-80 dark:border-purple-100a20 dark:hover:border-purple-100a20 dark:text-white dark:disabled:text-whitea50`,
        "secondary-2": `bg-white border-b border-purple-100a10 hover:border-purple-100a10 text-purple-60 disabled:text-purple-60a50 elevation-2 active:elevation-1
          dark:bg-purple-60 dark:text-white dark:border-purple-100a20 dark:hover:border-purple-100a20 dark:disabled:text-whitea50`,
        tertiary: `bg-transparent text-purple-60 border-b border-transparent hover:border-transparent disabled:text-purple-60a50
          dark:text-white disabled:text-whitea50`,
        link: `text-grey-50 underline hover:text-purple-60 border-none
        dark:text-purple-0 dark:hover:text-teal-50`,
      },
      disabled: {
        true: "pointer-events-none active:translate-none select-none",
      },
      size: {
        default: "py-xs px-lg border-b-[6px] text-button-rg [&>svg]:size-6",
        sm: "py-2xs px-xs border-b-4 text-button-sm [&>svg]:size-5",
      },
      rounded: {
        full: "rounded-full",
        md: "rounded-md",
      },
      width: {
        default: "w-fit",
        full: "w-full flex-1",
      },
      mode: {
        light: "light",
        dark: "dark",
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
      width: "default",
      mode: "light",
      disabled: false,
    },
  }
);
