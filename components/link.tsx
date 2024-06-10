import { cn } from "@/lib/utils";
import { HTMLProps, PropsWithChildren } from "react";

export const Link = (
  props: HTMLProps<HTMLAnchorElement> & PropsWithChildren,
) => {
  return (
    <a
      {...props}
      className={cn(
        "hover:text-byzantine-200 inline-flex items-center gap-1 text-slate-300 transition-colors",
        props.className,
      )}
    >
      {props.children}
    </a>
  );
};
