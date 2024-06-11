import { cn } from "@/lib/utils";
import { HTMLProps, PropsWithChildren } from "react";

export const Link = (
  props: HTMLProps<HTMLAnchorElement> & PropsWithChildren,
) => {
  return (
    <a
      {...props}
      className={cn(
        "vertical transition-colors hover:text-gray-400",
        props.className,
      )}
    >
      {props.children}
    </a>
  );
};
