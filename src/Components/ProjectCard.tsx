import {
  faArrowUpRightFromSquare,
  faExpand,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { IconText, Link } from "./Components";
import { Project } from "../Data/projects";
import { Tags } from "./Tags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ProjectCardProps extends Project {
  canGrow?: boolean;
  expand: () => void;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  description,
  imageUrl,
  tags,
  title,
  url,
  expand,
  canGrow,
}) => {
  return (
    <div
      className={`animate__animated animate__faster animate__zoomIn p-6 bg-stone-50 dark:bg-black rounded drop-shadow-md dark:shadow-black dark:border dark:border-slate-800  ${
        canGrow ? "w-full h-fit" : "flex-shrink-0 flex-grow-0 max-w-full md:max-w-sm h-fit"
      }
      }`}
    >
      <div className={`flex md:flex-row flex-col-reverse gap-3`}>
        {canGrow && (
          <img
            src={imageUrl}
            alt={title}
            className={`rounded w-full md:max-w-lg`}
          />
        )}
        <div className={`flex flex-col justify-start gap-3 w-full`}>
          <div className="flex flex-row flex-nowrap justify-between">
            <div>
              <div
                className={`${
                  canGrow ? "text-4xl" : "text-xl"
                } my-1 dark:text-white`}
              >
                {!url && title}
                {url && (
                  <Link
                    className="text-blue-500 flex flex-shrink flex-grow-0 flex-row flex-nowrap items-start gap-3 mr-5"
                    href={url}
                  >
                    <IconText
                      text={title}
                      icon={faArrowUpRightFromSquare}
                      iconRight
                      className="whitespace-pre-wrap gap-3"
                    />
                  </Link>
                )}
              </div>
            </div>
            <div>
              <button
                className={`${
                  !canGrow
                    ? "dark:text-white"
                    : "dark:text-red-400 text-slate-600"
                } hover:scale-110 transition-transform hidden lg:block`}
                onClick={() => {
                  expand();
                }}
              >
                <FontAwesomeIcon
                  icon={canGrow ? faXmark : faExpand}
                  className="text-3xl"
                />
              </button>
            </div>
          </div>
          <blockquote className="border-l-4 rounded-r dark:border-blue-500 dark:bg-slate-900 bg-slate-200 border-blue-500 p-3 dark:text-slate-300 text-sm">
            {description}
          </blockquote>
          {!canGrow && (
            <div className="flex flex-1 justify-start">
              <img
                src={imageUrl}
                alt={title}
                className="rounded pointer-events-none"
                width={512}
              />
            </div>
          )}
          <p className="dark:text-slate-400">Skills &amp; Tech:</p>
          <Tags tags={tags} />
        </div>
      </div>
    </div>
  );
};
