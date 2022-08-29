import { FC, ReactNode, useMemo, useState } from "react";
import { Hero } from "./Layout";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../Data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

// THIS MODULE IS NOT CURRENTLY USED & WILL NOT WORK
interface ProjectCarouselProps {
  children?: ReactNode;
}

const CarouselDots: FC<{
  idx: number;
  length: number;
  goToIndex: (idx: number) => void;
}> = ({ idx, length, goToIndex }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-1">
      {Array.from(Array(length)).map((_, index) => {
        return (
          <button
            className="flex px-1"
            key={`btn-${index}-of-${length}`}
            onClick={() => goToIndex(index)}
          >
            <FontAwesomeIcon
              icon={faCircle}
              className={` ${
                index === idx
                  ? "text-lg dark:text-orange-400 text-blue-500"
                  : "text-xs text-gray-300 dark:text-gray-700"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

export const ProjectCarousel: FC<ProjectCarouselProps> = ({ children }) => {
  const [idx, setIdx] = useState(0);
  const index = useMemo(() => {
    if (idx > projects.length - 1) {
      setIdx(0);
      return 0;
    }
    if (idx < 0) {
      setIdx(projects.length - 1);
      return projects.length - 1;
    }
    return idx;
  }, [idx]);

  return (
    <Hero
      className="bg-slate-100 dark:bg-gray-900 flex px-5 transition-colors"
      tabIndex={0}
      onKeyUp={(e) => {
        if (e.key === "ArrowLeft") {
          return setIdx((prev) => prev - 1);
        }
        if (e.key === "ArrowRight") {
          return setIdx((prev) => prev + 1);
        }
      }}
    >
      <div className="flex flex-1 flex-col h-full justify-center">
        <div className="flex flex-col h-full mt-5">
          <ProjectCard {...projects[idx]}  />
          <div className="relative bottom-10 w-full">
            <div className="flex w-full flex-row justify-between">
              <button
                className="text-4xl dark:text-white ml-5"
                onClick={() => setIdx(idx - 1)}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <CarouselDots
                idx={index}
                length={projects.length}
                goToIndex={(idx) => setIdx(idx)}
              />
              <button
                className="text-4xl dark:text-white mr-5"
                onClick={() => setIdx(idx + 1)}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Hero>
  );
};
