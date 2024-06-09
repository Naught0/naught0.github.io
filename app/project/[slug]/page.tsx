import { ProjectCarouselItem } from "@/components/project-carousel-item";
import { Carousel } from "@/components/ui/carousel";
import { projects } from "@/data/projects";
import type { Metadata } from "next";
import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";
import { notFound } from "next/navigation";
import { readFileSync } from "fs";
import { Badge } from "@/components/ui/badge";

export const generateStaticParams = () => {
  return projects.map(({ slug }) => ({
    slug,
  }));
};

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `James' Projects: ${project.title}`,
    authors: { name: "Jamese E", url: "https://jamese.dev" },
    description: project.description,
  };
};

type Props = {
  params: { slug: string };
};

export default function Project({ params: { slug } }: Props) {
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const thing = readFileSync(`./data/posts/${project.slug}.md`).toString();
  if (!thing) notFound();

  return (
    <article>
      <div
        dangerouslySetInnerHTML={{
          __html: thing
            ? micromark(thing, {
                extensions: [gfm()],
                htmlExtensions: [gfmHtml()],
              })
            : "",
        }}
      />
      <hr />
      <span className="inline-flex gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </span>
    </article>
  );
}
