import { cn } from "@/lib/utils";
import React, { HTMLProps, PropsWithChildren } from "react";

export const HoverScaleLink = (
  props: HTMLProps<HTMLAnchorElement> & PropsWithChildren,
) => {
  return (
    <a
      {...props}
      className={cn(
        "text-3xl transition-all hover:scale-105 hover:opacity-100 sm:text-4xl",
        props.className,
      )}
    >
      {props.children}
    </a>
  );
};
