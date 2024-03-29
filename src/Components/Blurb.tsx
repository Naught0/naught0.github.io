import {
  faGithubSquare,
  faJs,
  faLinkedin,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faGem } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconText, Link } from "./Components";

export const Blurb = () => {
  return (
    <>
      <section className="p-5 h-screen animate-bg">
        <div className="h-full flex items-center">
          <div className="flex flex-col md:flex-row justify-center w-full gap-8">
            <div className="flex flex-col">
              <p className="text-7xl md:text-9xl dark:text-white text-right font-bold">
                James E.
              </p>
              <nav className="flex flex-col items-end text-xl gap-2">
                <p>
                  <span className="text-blue-500 dark:text-orange-400 font-bold">
                    Full Stack Developer
                  </span>
                </p>
                <p className="text-base text-gray-600 dark:text-slate-300">
                  Charlotte, NC
                </p>
                <Link
                  className="dark:text-white underline"
                  href="https://github.com/Naught0"
                >
                  <IconText icon={faGithubSquare}>naught0</IconText>
                </Link>
                <Link
                  className="underline dark:text-white"
                  href="https://linkedin.com/in/jameseuteneuer"
                >
                  <IconText icon={faLinkedin}>jameseuteneuer</IconText>
                </Link>
              </nav>
            </div>
            <div className="flex items-end">
              <div className="dark:text-white w-full flex flex-col gap-2">
                <p className="text-black dark:text-white text-xl">
                  I like to build apps using
                </p>
                <div className="block w-full">
                  <IconText icon={faPython} text="Python" />
                </div>
                <div className="block w-full">
                  <IconText icon={faJs} text="JS | TS" />
                </div>
                <div className="block w-full">
                  <IconText icon={faReact} text="React" />
                </div>
                <div className="block w-full">
                  <IconText icon={faGem} text="Ruby" />
                </div>
                <p className="text-gray-500 dark:text-slate-300 text-sm">
                  &amp; lots more
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <button
            className="absolute bottom-5 drop-shadow shadow-black dark:text-white"
            onClick={() =>
              window.scroll({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <div className="flex flex-col animate-bounce">
              <FontAwesomeIcon
                className="text-5xl md:text-5xl text-rose-500 opacity-30 dark:text-white dark:opacity-70"
                icon={faChevronDown}
              />
            </div>
          </button>
        </div>
      </section>
    </>
  );
};
