import { IconLink } from "./icon-link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ProfilePic } from "./profile-pic";

export const HomepageHeroContent = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row">
      <div className="flex sm:hidden">
        <ProfilePic />
      </div>
      <div
        className="z-10 flex basis-1/2 flex-col gap-3 text-right"
        style={{ textShadow: "0px 2px 3px rgb(0 0 0 / 60%)" }}
      >
        <p className="text-7xl font-black sm:text-9xl">james</p>
        <p className="text-lg font-bold text-orange-100 sm:text-4xl">
          full stack developer
        </p>
        <div className="flex flex-grow justify-end gap-3">
          <IconLink href="https://github.com/naught0" target="_blank">
            <FaGithub />
          </IconLink>
          <IconLink href="https://linkedin.com/in/jameseuteneuer">
            <FaLinkedin />
          </IconLink>
        </div>
      </div>
      <div className="-ml-16 hidden basis-1/2 sm:block">
        <ProfilePic />
      </div>
    </div>
  );
};