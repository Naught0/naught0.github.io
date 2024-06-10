import React from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { IconLink } from "./icon-link";

export const Nav = () => {
  return (
    <nav className="flex w-full flex-row justify-between gap-3 border-b-2 border-b-slate-300 bg-black px-6 py-3">
      <div className="flex flex-row justify-start gap-3">
        <IconLink href="/" className="inline-flex items-center gap-1">
          <HiOutlineHome />
          <span className="font-display text-base font-black">jamese.dev</span>
        </IconLink>
      </div>
      <div className="flex flex-row justify-end gap-3"></div>
    </nav>
  );
};
