import {
  faGithubSquare,
  faJs,
  faLinkedin,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronDown,
  faGem,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconText } from "./Components";

export const Blurb = () => {
  return (
    <>
      <section className="p-5 h-screen bg-gradient-to-br from-white to-zinc-300 dark:from-black dark:to-slate-900">
        <div className="h-full flex items-center">
          <div className="flex flex-col md:flex-row justify-center w-full gap-8">
            <div className="flex flex-col">
              <p className="text-7xl md:text-9xl dark:text-white text-right">
                James E.
              </p>
              <nav className="flex flex-col items-end text-xl gap-2">
                <p>
                  <span className="text-blue-500 dark:text-orange-400">
                    Full Stack Developer
                  </span>
                </p>
                <p className="text-sm text-gray-600 dark:text-slate-300">
                  Charlotte, NC
                </p>
                <a
                  className="underline dark:text-white"
                  href="https://github.com/Naught0"
                >
                  <IconText icon={faGithubSquare}>naught0</IconText>
                </a>
                <a
                  className="underline dark:text-white"
                  href="https://linkedin.com/jameseuteneuer"
                >
                  <IconText icon={faLinkedin}>jameseuteneuer</IconText>
                </a>
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
            className="absolute bottom-5 dark:text-white"
            onClick={() =>
              window.scroll({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <div className="flex flex-col">
              <p className="dark:text-white text-xl">Projects</p>
              <FontAwesomeIcon className="text-4xl" icon={faChevronDown} />
            </div>
          </button>
        </div>
      </section>
    </>
  );
};
