import { cn } from "@/lib/utils";
import React, { HTMLProps, PropsWithChildren } from "react";

export const HeroLink = (
  props: PropsWithChildren & HTMLProps<HTMLAnchorElement>,
) => {
  return (
    <a
      {...props}
      className={cn(
        "font-display border border-slate-300 bg-black px-10 py-3 text-3xl font-bold shadow-black transition-all hover:translate-x-2 hover:bg-primary-foreground hover:text-primary hover:drop-shadow-md sm:text-4xl",
        props.className,
      )}
    >
      {props.children}
    </a>
  );
};
