import {
  faArrowUpRightFromSquare,
  faExpand,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  FC,
  ForwardedRef,
  forwardRef,
  useEffect,
  createRef,
  useState,
} from "react";
import { IconText, Link } from "./Components";
import { Project } from "../Data/projects";
import { Tags } from "./Tags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDebounce } from "use-debounce";
import { useKeyPressed } from "../Hooks";

export interface ProjectCardProps extends Project {
  canExpand?: boolean;
  expand: () => void;
}

interface VideoProps {
  videoUrl: string;
  playing?: boolean;
}
const Video = forwardRef(
  (props: VideoProps, ref: ForwardedRef<HTMLVideoElement>) => {
    return (
      <div className="overflow-hidden rounded-md">
        <video
          className="max-w-3xl max-h-full w-full"
          src={props.videoUrl}
          autoPlay={props.playing}
          ref={ref}
          loop
          muted
        >
          <source src={props.videoUrl} type="video/mp4" />
        </video>
      </div>
    );
  }
);

export const ProjectCard: FC<ProjectCardProps> = ({
  description,
  imageUrl,
  videoUrl,
  tags,
  title,
  url,
  expand,
  canExpand: canGrow,
}) => {
  const [hovering, setHovering] = useState(false);
  const [isHovering] = useDebounce(hovering, 700);
  const shouldClose = useKeyPressed((e) => e.key === "Escape");

  // Close on ESC
  useEffect(() => {
    if (!shouldClose || !canGrow) return;
    expand();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldClose]);

  // Video ref
  const videoRef = createRef<HTMLVideoElement>();
  useEffect(() => {
    if (!videoRef.current) return;
    if (!isHovering) {
      videoRef.current.pause();
      return;
    }

    videoRef.current.play();
  }, [isHovering, videoRef]);

  return (
    <div
      className={`${!canGrow ? "md:hover:scale-105 md:cursor-pointer" : ""}
        ${
          canGrow
            ? "max-w-full lg:w-2/3"
            : "flex-shrink-0 flex-grow-0 w-fit max-w-full md:max-w-sm xl:max-w-xl"
        }
      m-auto !transition-transform hover:z-50 p-10 bg-stone-50 dark:bg-black 
      rounded drop-shadow-md dark:shadow-black dark:border 
    dark:border-slate-800 animate-fadeIn hover:max-h-max max-h-min
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
                    ? "dark:text-white text-slate-400"
                    : "dark:text-red-400 text-slate-600"
                } hover:scale-110 transition-transform hidden lg:block`}
                onClick={() => {
                  expand();
                }}
              >
                <FontAwesomeIcon
                  icon={canGrow ? faXmarkCircle : faExpand}
                  className="text-2xl"
                />
              </button>
            </div>
          </div>
          <blockquote className="border-l-4 rounded-r dark:border-blue-500 dark:bg-slate-900 bg-slate-200 border-blue-500 p-3 dark:text-slate-300 text-sm">
            {description}
          </blockquote>
          {!canGrow && (
            <div className="flex flex-col rounded w-full">
              {videoUrl ? (
                <Video
                  videoUrl={videoUrl}
                  playing={isHovering}
                  ref={videoRef}
                />
              ) : (
                <img
                  src={imageUrl}
                  alt={title}
                  className="rounded-md max-w-full"
                />
              )}
              {isHovering && (
                <div className="animate-fadeIn hidden md:block">
                  <Tags tags={tags} />
                </div>
              )}
            </div>
          )}
          {canGrow && (
            <div className="flex flex-grow flex-col">
              <Tags tags={tags} />
              <div className="m-auto mt-2">
                {videoUrl ? (
                  <Video videoUrl={videoUrl} playing={true} ref={videoRef} />
                ) : (
                  <div className="max-w-screen-lg">
                    <img
                      src={imageUrl}
                      alt={title}
                      className="rounded pointer-events-none max-w-full"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
