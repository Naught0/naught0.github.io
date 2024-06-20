import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import { type Compatible } from "to-vfile";
import { unified } from "unified";
import rehypeSlug from "rehype-slug";
import remarkParse from "remark-parse";
import remarkToc from "remark-toc";
import rehypeExternalLinks from "rehype-external-links";

export async function markdownToHtml(markdown: Compatible) {
  return String(
    await unified()
      .use(remarkParse)
      .use(remarkToc)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeHighlight)
      .use(rehypeExternalLinks, {
        rel: ["noopener", "noreferrer"],
        target: "_blank",
      })
      .use(rehypeStringify)
      .process(markdown),
  );
}
