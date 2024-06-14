import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import { type Compatible } from "to-vfile";
import { unified } from "unified";
import remarkParse from "remark-parse";

export async function markdownToHtml(markdown: Compatible) {
  return String(
    await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .process(markdown),
  );
}
