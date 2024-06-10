import { cn } from "@/lib/utils";
import { HTMLProps, PropsWithChildren } from "react";

export const Link = (
  props: HTMLProps<HTMLAnchorElement> & PropsWithChildren,
) => {
  return (
    <a
      {...props}
      className={cn(
        "inline-flex items-center gap-1 text-primary-foreground transition-colors hover:text-slate-400",
        props.className,
      )}
    >
      {props.children}
    </a>
  );
};
