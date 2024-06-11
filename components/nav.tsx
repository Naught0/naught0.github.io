import { PropsWithChildren } from "react";
import { HoverScaleLink } from "./hover-scale-link";
import { FaGithub } from "react-icons/fa";

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

function NavLink(props: PropsWithChildren & { href: string }) {
  return (
    <HoverScaleLink
      className="font-display inline-flex items-center gap-1 text-base font-black sm:text-xl"
      href={props.href}
    >
      {props.children}
    </HoverScaleLink>
  );
}
