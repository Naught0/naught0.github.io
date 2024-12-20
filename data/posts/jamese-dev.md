
# Creating a Static Site Using Next.js 14 & Github Pages

![](/jamese-dev.webp)

---

## Contents

## Configuring Next

I found an excellent guide specific to hosting static Next.js apps on Github pages from [@gregrickaby](https://github.com/gregrickaby) which you can find [here](https://github.com/gregrickaby/nextjs-github-pages).

All I really needed was this `next.config.js` (slightly modified from the guide):

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "development" ? "" : "/naught0.github.io",
  images: { unoptimized: true },
};

export default nextConfig;
```

The `basePath` needs only apply when hosted on Github pages, so I get rid of it in dev so that `<img />`s work locally.

## Optimizing Images

When `output` is `"export"`, Next will not optimize images automatically. I have a number of images in the repo that vary in size, quality, and format. I need to resize and compress these into `.webp`s because that's what our lord and savior Lighthouse™️  demands.

I initially thought to use ImageMagick for this task, but I discovered [sharp](https://sharp.pixelplumbing.com/) which promised to be faster with a pleasant API.

### Using sharp

I store the original images in `images/`. I need to process them, then place them in `public/` where they can be easily served later.

A trimmed down version of the script looks like this:

```js
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join("images");
const outputDir = path.join("public");

async function processImage(filePath) {
  const fileName = path.basename(filePath);
  const outputFilePath = path.join(
    outputDir,
    `${fileName.split(".")[0]}.webp`
  );

  try {
    // Basically set a maxWidth of 1280 & convert to webp
    await sharp(filePath)
      .resize({ width: 1280, withoutEnlargement: true }) 
      .webp({ force: true })
      .toFile(outputFilePath);
    console.log(`Processed ${fileName}`);
  } catch (error) {
    console.error(`Error processing ${fileName}:`, error);
  }
}
// For each jpeg, png file => processImage(path), etc.
```
I run this as the first step of my build process. You can find the [full script here](https://github.com/Naught0/naught0.github.io/blob/master/scripts/process-images.js).

## Transforming markdown

Next has good support for [MDX](https://nextjs.org/docs/app/building-your-application/configuring/mdx) pages, but it's not exactly what I'm looking for.

Instead, I define the metadata (title, description, tags, etc.) for each blog post in `data/blogs.ts`. 

```ts
export const blogs: Array<BlogPost> = [
  {
    title: "Creating a Static Site Using Next.js 14 & Github Pages",
    slug: "jamese-dev",
    createdAt: "2024-06-16",
    description: "",
    imageUrl: "/jamese-dev.webp",
    tags: [
      "next.js",
      "github pages",
      "SSG",
      "image optimization",
      "sharp",
      "markdown",
      "blog",
    ],
  },
  // ...
];
```

Writing this in plain typescript makes it easy to consume throughout the rest of the app. I can render a list of my blog posts, like at [https://jamese.dev/blog](/blog). Most importantly, I'm able to iterate over these values to generate my static pages with Next using [`generateStaticParams`](https://nextjs.org/docs/app/api-reference/functions/generate-static-params).

I write each blog post using plain ole markdown (egads!) in `data/posts/[slug].md`. I use [remark](https://github.com/remarkjs/remark) and [rehype](https://github.com/rehypejs/rehype) from "unified.js" with a bunch of plugins to transform my posts from markdown into HTML. The plugins are responsible for everything from creating the table of contents to adding syntax highlighting to code snippets. My pipeline looks like this:

```ts
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
```

I only need to pass the output of this function to `dangerouslySetInnerHTML` on an element. I don't have to do any sanitization because I don't plan on pwning myself &ndash; at least not anytime soon. You can see how this and all blog posts are rendered [here](https://github.com/Naught0/naught0.github.io/blob/master/app/blog/%5Bslug%5D/page.tsx).


## Building & Deploying

To deploy to Github Pages, I use the [`gh-pages`](https://github.com/tschaub/gh-pages) utility. I could set up a Github action to do the same thing upon merge to main, but I like this way since I'm just committing straight to main anyhow.

My `package.json` scripts look like this:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "pnpm process-images && next build",
    "start": "next start",
    "lint": "next lint",
    "process-images": "./scripts/process-images.js",
    "predeploy": "next build",
    "deploy": "gh-pages --nojekyll --cname www.jamese.dev -d out"
  }
}
```

The process is straightforward. I just run `pnpm run deploy` and:

1. Images are converted to `.webp` and placed in `public/`
2. The Next site is built and statically exported to `out/`
3. `gh-pages` does its thing to push the build artifacts in `out/` to Github
   - It also creates the [`.nojekyll`](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/) and `CNAME` files for me

## Conclusion

That's it! There are some minor quirks, but building a completely static site with Next.js and hosting it via Github pages is pretty easy &ndash; and free :)

