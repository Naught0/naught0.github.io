import { IconLink } from "./icon-link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ProfilePic } from "./profile-pic";
import { HeroLink } from "./hero-link";

export const HomepageHeroContent = () => {
  return (
    <div className="font-display flex flex-col items-center justify-center sm:flex-row">
      <div className="flex sm:hidden">
        <ProfilePic />
      </div>
      <div className="z-10 flex basis-1/2 flex-col gap-3 text-right">
        <div
          style={{ textShadow: "0px 2px 3px rgb(0 0 0 / 60%)" }}
          className="contents"
        >
          <p className="text-7xl font-black sm:text-9xl">james</p>
          <p className="text-lg font-bold text-slate-100 sm:text-4xl">
            full stack developer
          </p>
          <div className="flex flex-grow justify-end gap-3">
            <IconLink href="https://github.com/naught0" target="_blank">
              <FaGithub className="shadow-black drop-shadow" />
            </IconLink>
            <IconLink href="https://linkedin.com/in/jameseuteneuer">
              <FaLinkedin className="shadow-black drop-shadow" />
            </IconLink>
          </div>
        </div>

        <HeroLink href="#projects">projects</HeroLink>
        <HeroLink href="#projects">resumé</HeroLink>
        <HeroLink href="/blog">blog</HeroLink>
      </div>
      <div className="-ml-16 hidden basis-1/2 sm:block">
        <ProfilePic />
      </div>
    </div>
  );
};
