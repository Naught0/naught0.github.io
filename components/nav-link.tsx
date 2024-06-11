"use client";

import { PropsWithChildren } from "react";
import { HoverScaleLink } from "./hover-scale-link";

export function NavLink(props: PropsWithChildren & { href: string }) {
  return (
    <HoverScaleLink
      className={`font-display inline-flex items-center gap-1 text-base font-black sm:text-xl ${props.href === window.location.pathname ? "underline underline-offset-8" : "text-primary-foreground"}`}
      href={props.href}
    >
      {props.children}
    </HoverScaleLink>
  );
}
