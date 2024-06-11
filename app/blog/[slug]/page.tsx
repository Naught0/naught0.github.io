import { Badge } from "@/components/ui/badge";
import { blogs } from "@/data/blogs";
import { existsSync, readFileSync } from "fs";
import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateStaticParams = () => {
  return blogs.map(({ slug }) => ({
    slug,
  }));
};

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const post = blogs.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `James' Projects: ${post.title}`,
    authors: { name: "Jamese E", url: "https://jamese.dev" },
    description: post.description,
  };
};

type Props = {
  params: { slug: string };
};

export default function Project({ params: { slug } }: Props) {
  const post = blogs.find((p) => p.slug === slug);
  if (!post) notFound();

  const path = `./data/posts/${post.slug}.md`;
  if (!existsSync(path)) notFound();

  const markdown = readFileSync(path).toString();

  return (
    <article>
      <div
        dangerouslySetInnerHTML={{
          __html: markdown
            ? micromark(markdown, {
                extensions: [gfm()],
                htmlExtensions: [gfmHtml()],
                allowDangerousHtml: true,
              })
            : "",
        }}
      />
      <hr />
      <span className="inline-flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-nowrap">
            {tag}
          </Badge>
        ))}
      </span>
    </article>
  );
}
