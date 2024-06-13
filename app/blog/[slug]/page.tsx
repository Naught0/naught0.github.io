import "@catppuccin/highlightjs/css/catppuccin-mocha.css";
import { Tags } from "@/components/tags";
import { blogs } from "@/data/blogs";
import { existsSync } from "fs";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import { read } from "to-vfile";
import { unified } from "unified";
import remarkParse from "remark-parse";

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
    title: post.title,
    authors: { name: "Jamese E", url: "https://jamese.dev" },
    description: post.description,
  };
};

type Props = {
  params: { slug: string };
};

export default async function Project({ params: { slug } }: Props) {
  const post = blogs.find((p) => p.slug === slug);
  if (!post) notFound();

  const path = `./data/posts/${post.slug}.md`;
  if (!existsSync(path)) notFound();

  const __html = String(
    await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .process(await read(path)),
  );
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
