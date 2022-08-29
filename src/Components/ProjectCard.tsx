import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { IconText, Link } from "./Components";
import { Project } from "../Data/projects";
import { Tags } from "./Tags";

export const ProjectCard: FC<Project> = ({
  description,
  imageUrl,
  tags,
  title,
  url,
}) => {
  return (
    <div
      className={`max-w-sm flex-grow-0 flex-shrink h-fit p-6 bg-white dark:bg-black shadow-md rounded-lg dark:shadow-black dark:border dark:border-slate-800`}
    >
      <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-3">
        <div className="flex flex-col justify-start gap-3 w-full">
          <p className="text-3xl my-1 text-center dark:text-white">
            {title}
          </p>
          <p className="dark:text-gray-400 bg-slate-50 text-sm dark:bg-slate-900 p-5 border border-slate-200 dark:border-slate-800 rounded">
            {description}
          </p>
          <div className="flex flex-row flex-nowrap items-center justify-center">
            {url && (
              <Link
                className="text-blue-500 flex flex-row flex-nowrap items-center gap-3 text-lg"
                href={url}
              >
                <IconText
                  icon={faArrowUpRightFromSquare}
                  text="link"
                  iconRight
                />
              </Link>
            )}
          </div>
          <div className="flex flex-1 justify-start">
            <img
              src={imageUrl}
              alt={title}
              className="rounded"
            />
          </div>
          <p className="dark:text-gray-400">Skills &amp; Tech:</p>
          <Tags tags={tags} />
        </div>
      </div>
    </div>
  );
};
