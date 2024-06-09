import { Link } from "./link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { LuExternalLink } from "react-icons/lu";

export const ProjectCard = (props: Project) => {
  const href = `/project/${props.slug}`;
  return (
    <Card className="w-[420px] gap-3 md:w-80 lg:w-96">
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
      <CardContent className="flex justify-center">
        <img src={props.imageUrl} className="rounded lg:max-w-80" />
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <CardDescription>{props.description}</CardDescription>
        <Link href={href}>Read more</Link>
      </CardFooter>
    </Card>
  );
};
