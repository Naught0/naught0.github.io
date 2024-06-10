import React from "react";
import { HoverScaleLink } from "./hover-scale-link";
import { FaHome } from "react-icons/fa";

export const Nav = () => {
  return (
    <nav className="flex w-full flex-row justify-between gap-3 border-b-2 border-b-slate-300 bg-black px-6 py-3">
      <div className="flex flex-row justify-start gap-3">
        <HoverScaleLink
          href="/"
          className="inline-flex items-center gap-1 font-display text-base font-black sm:text-lg"
        >
          jamese.dev/
        </HoverScaleLink>
      </div>
      <div className="flex flex-row justify-end gap-3"></div>
    </nav>
  );
};
