import { HoverScaleLink } from "./hover-scale-link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ProfilePic } from "./profile-pic";
import { HeroLink } from "./hero-link";

export const HomepageHeroContent = () => {
  return (
    <div className="flex flex-col items-center justify-center font-display sm:flex-row">
      <div className="flex sm:hidden">
        <ProfilePic />
      </div>
      <div className="z-10 flex basis-1/2 flex-col gap-3">
        <div
          style={{ textShadow: "0px 2px 3px rgb(0 0 0 / 60%)" }}
          className="contents text-right"
        >
          <p className="text-7xl font-black sm:text-9xl">james</p>
          <p className="text-lg font-bold text-slate-100 sm:text-4xl">
            full stack developer
          </p>
          <div className="flex flex-grow justify-end gap-3">
            <HoverScaleLink href="https://github.com/naught0" target="_blank">
              <FaGithub className="shadow-black drop-shadow" />
            </HoverScaleLink>
            <HoverScaleLink href="https://linkedin.com/in/jameseuteneuer">
              <FaLinkedin className="shadow-black drop-shadow" />
            </HoverScaleLink>
          </div>
        </div>

        <HeroLink className="text-left" href="#projects">
          projects
        </HeroLink>
        <HeroLink className="text-center" href="/resume.pdf">
          resumé
        </HeroLink>
        <HeroLink className="text-right" href="/blog">
          blog
        </HeroLink>
      </div>
      <div className="-ml-16 hidden basis-1/2 sm:block">
        <ProfilePic />
      </div>
    </div>
  );
};
