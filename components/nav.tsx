import { HoverScaleLink } from "./hover-scale-link";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "./nav-link";

export const Nav = () => {
  return (
    <nav className="flex w-full flex-row justify-between gap-3 border-b-2 border-b-slate-300 bg-black px-6 py-3">
      <div className="flex flex-row justify-start gap-6">
        <NavLink href="/">/home</NavLink>
        <NavLink href="/blog">/blog</NavLink>
      </div>
      <div className="flex flex-row items-center justify-end gap-3">
        <HoverScaleLink href="https://github.com/naught0" target="_blank">
          <FaGithub className="text-2xl" />
        </HoverScaleLink>
      </div>
    </nav>
  );
};
