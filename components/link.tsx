import { cn } from "@/lib/utils";
import { HTMLProps, PropsWithChildren } from "react";

export const Link = (
  props: HTMLProps<HTMLAnchorElement> & PropsWithChildren,
) => {
  return (
    <a
      {...props}
      className={cn(
        "inline-flex items-center gap-1 text-blue-300 transition-colors hover:text-blue-500",
        props.className,
      )}
    >
      {props.children}
    </a>
  );
};
