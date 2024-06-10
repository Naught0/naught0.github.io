import { Link } from "./link";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { LuExternalLink } from "react-icons/lu";

export const ProjectCard = (props: Project) => {
  const href = `/project/${props.slug}`;
  return (
    <Card className="flex h-fit basis-full flex-row flex-wrap items-center justify-center gap-3 py-3">
      <div className="flex basis-full flex-col gap-3 md:basis-5/12">
        <CardHeader>
          <CardTitle>
            {props.url ? (
              <Link
                href={props.url}
                target="_blank"
                rel="noopener"
                className="inline-flex"
              >
                {props.title} <LuExternalLink />
              </Link>
            ) : (
              props.title
            )}
          </CardTitle>
        </CardHeader>

        <div className="flex w-full justify-center md:hidden">
          <img src={props.imageUrl} className="max-w-[80vw]" />
        </div>
        <CardFooter className="flex-col gap-6 py-3">
          <CardDescription>{props.description}</CardDescription>
          {props.hasBlog && (
            <Link
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "text-base lg:text-lg",
              })}
              href={href}
            >
              Read blog
            </Link>
          )}
        </CardFooter>
      </div>
      <div className="hidden w-full basis-full justify-center md:flex md:basis-1/2">
        <img src={props.imageUrl} className="w-full max-w-screen-sm" />
      </div>
    </Card>
  );
};
