import { Link } from "./link";
import { Tags } from "./tags";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const BlogCard = (props: BlogPost) => {
  return (
    <Card className="flex h-fit basis-full flex-row flex-wrap items-center justify-center gap-3 bg-black py-3">
      <div className="flex basis-full flex-col gap-3 md:basis-5/12">
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <p className="text-slate-300">{props.createdAt}</p>
        </CardHeader>

        {props.imageUrl && (
          <div className="flex w-full justify-center md:hidden">
            <img src={props.imageUrl} className="max-h-[50vh] rounded" />
          </div>
        )}
        <CardFooter className="flex-col gap-3">
          <CardDescription className="text-base">
            {props.description}
          </CardDescription>
          <Tags tags={props.tags} />
          <Link
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "my-3 text-base lg:text-lg",
            })}
            href={`/blog/${props.slug}`}
          >
            read blog
          </Link>
        </CardFooter>
      </div>
      {props.imageUrl && (
        <div className="hidden w-full basis-full justify-center md:flex md:basis-1/2">
          <img
            src={props.imageUrl}
            className="w-full max-w-screen-sm rounded"
          />
        </div>
      )}
    </Card>
  );
};
