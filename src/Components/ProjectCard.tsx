import {
  faArrowUpRightFromSquare,
  faExpand,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FC, useState } from "react";
import { IconText, Link } from "./Components";
import { Project } from "../Data/projects";
import { Tags } from "./Tags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDebounce } from "use-debounce";

export interface ProjectCardProps extends Project {
  canGrow?: boolean;
  expand: () => void;
}

const Video = ({ videoUrl }: { videoUrl?: string }) => {
  return (
    <video
      className="max-w-3xl max-h-full w-full"
      src={videoUrl}
      loop
      muted
      autoPlay
    >
      <source src={videoUrl} type="video/mp4" />
    </video>
  );
};

export const ProjectCard: FC<ProjectCardProps> = ({
  description,
  imageUrl,
  videoUrl,
  tags,
  title,
  url,
  expand,
  canGrow,
}) => {
  const [hovering, setHovering] = useState(false);
  const [isHovering] = useDebounce(hovering, 700);

  return (
    <div
      className={`${!canGrow && "md:hover:scale-105 md:cursor-pointer"}
        ${
          canGrow
            ? "w-full"
            : "flex-shrink-0 flex-grow-0 max-w-full md:max-w-sm"
        }
      !transition-transform hover:basis-1/ hover:z-50 p-6 bg-stone-50 dark:bg-black rounded drop-shadow-md dark:shadow-black dark:border dark:border-slate-800 animate-fadeIn hover:max-h-max max-h-min 
      }`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={() => {
        if (!canGrow && window.innerWidth >= 1024) return expand();
      }}
    >
      <div className={`flex md:flex-row flex-col-reverse gap-3`}>
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
                  className="text-2xl"
                />
              </button>
            </div>
          </div>
          <blockquote className="border-l-4 rounded-r dark:border-blue-500 dark:bg-slate-900 bg-slate-200 border-blue-500 p-3 dark:text-slate-300 text-sm">
            {description}
          </blockquote>
          <div className="flex flex-1 justify-start rounded">
            {!canGrow && (
              <>
                {(!isHovering || !videoUrl) && (
                  <img
                    src={imageUrl}
                    alt={title}
                    className="rounded pointer-events-none"
                    width={512}
                  />
                )}
                {isHovering && <Video videoUrl={videoUrl} />}
              </>
            )}
            <div className="m-auto drop-shadow overflow-hidden rounded-md">
              {canGrow && videoUrl ? (
                <Video videoUrl={videoUrl} />
              ) : (
                <img
                  src={imageUrl}
                  alt={title}
                  className="rounded pointer-events-none"
                  width={512}
                />
              )}
            </div>
          </div>
          <div className={`${canGrow ? "" : "md:hidden"}`}>
            <Tags tags={tags} />
          </div>
          {!canGrow && isHovering && hovering && (
            <div className={`${!canGrow && "animate-fadeIn"} hidden md:block`}>
              <Tags tags={tags} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
