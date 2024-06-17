import "@catppuccin/highlightjs/css/catppuccin-mocha.css";
import { Tags } from "@/components/tags";
import { blogs } from "@/data/blogs";
import { existsSync } from "fs";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { read } from "to-vfile";
import { markdownToHtml } from "@/lib/markdown";

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

  const meta: Metadata = {
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? `http://localhost:${process.env.PORT ?? 3000}`
        : "https://jamese.dev",
    ),
    title: post.title,
    authors: { name: "Jamese E", url: "https://jamese.dev" },
    description: post.description,
    keywords:
      "blog, portfolio, jamese, jamese.dev, naught, naught0, programming, coding, webdev, python, typescript, javascript, developer",
    openGraph: {},
  };

  if (post.imageUrl) {
    meta.openGraph!.images = [{ url: post.imageUrl }];
  }

  return meta;
};

type Props = {
  params: { slug: string };
};

export default async function Project({ params: { slug } }: Props) {
  const post = blogs.find((p) => p.slug === slug);
  if (!post) notFound();

  const path = `./data/posts/${post.slug}.md`;
  if (!existsSync(path)) notFound();

  const __html = await markdownToHtml(await read(path));
  return (
    <article>
      <div
        dangerouslySetInnerHTML={{
          __html,
        }}
      />
      <hr />
      <span className="inline-flex flex-wrap gap-2">
        <Tags tags={post.tags} />
      </span>
    </article>
  );
}
