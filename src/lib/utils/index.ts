import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
// @ts-ignore
import { fontSize } from "../theme/font.js";

const twMerge = extendTailwindMerge({
  // use the `extend` key in case you want to extend instead of override
  override: {
    classGroups: {
      "font-size": [...Object.keys(fontSize).map((key) => `text-${key}`)],
    },
    conflictingClassGroups: {
      "font-size": ["font-size", "leading", "font-weight", "tracking"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
