# Creating a Static Site Using Next.js 14 & Github Pages

![](/jamese-dev.webp)

---

### Contents

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

When `output` is `"export"`, Next will not optimize images automatically. I have a number of images in the repo that vary in size, quality, and format. I need to resize and compress these into `.webp`s because that's what our lord and savior Lighthouse™️  demands of us.

I initially thought to use ImageMagick for optimization, but I discovered [sharp](https://sharp.pixelplumbing.com/) which promised to be faster with a pleasant API.

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
I run this as part of my build process, and you can find the [full script here](https://github.com/Naught0/naught0.github.io/blob/master/scripts/process-images.js).


## Building & Deploying


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
