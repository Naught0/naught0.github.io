import { existsSync } from "fs";

export const projects: Project[] = [
  {
    title: "combinator",
    slug: "combinator",
    url: "https://mtgcombinator.com",
    description:
      "Paste in a link to your Magic: The Gathering deck & immediately get an overview of what combos, loops, and shenanigans are inside. Also suggests combos that only require a single extra card.",
    imageUrl: "/mtgCombinator.png",
    tags: [
      "python",
      "flask",
      "fastapi",
      "pandas",
      "typescript",
      "react",
      "webhosting",
      "docker",
      "cloudflare pages",
      "google cloud run",
      "docker",
    ],
  },
  {
    title: "migr8",
    slug: "migr8",
    description:
      "An internal web app that acts as an ETL from competitor APIs to our platform. Solo designed and developed from the ground up in 3 months",
    imageUrl: "/rechargeMigr8.png",
    tags: [
      "python",
      "asyncio",
      "flask",
      "SQL",
      "typescript",
      "react",
      "redis",
      "hosting",
      "GCP",
      "VPS",
      "system design",
      "parallelization",
      "user roles",
      "security",
    ],
  },
  {
    title: "Colorado Avalanche Information Center (CAIC)",
    slug: "caic",
    description:
      "Interactive Map, tables, & misc. other components for the CAIC website to forecast, warn, & catalog avalanches in Colorado. Live Q4 2022",
    imageUrl: "/avalanche.state.co.us.png",
    url: "https://avalanche.state.co.us",
    tags: [
      "react",
      "google maps",
      "google places",
      "caching",
      "CI/CD",
      "agile",
      "design implementation",
    ],
  },
  {
    title: "this site :)",
    slug: "personal-site",
    url: "https://github.com/naught0/naught0.github.io",
    description: "My personal website displaying some of my projects & skills",
    imageUrl: "/personalSite.png",
    tags: [
      "typescript",
      "react",
      "tailwind.css",
      "deployment",
      "web hosting",
      "github pages",
    ],
  },
  {
    title: "asyncurban",
    url: "https://github.com/naught0/asyncurban",
    slug: "asyncurban",
    description:
      "An asynchronous python wrapper around the UrbanDictionary API. Used by over >7.6k projects.",
    imageUrl: "/asyncurban.png",
    tags: [
      "python",
      "asyncio",
      "REST API",
      "documentation",
      "sphinx",
      "package distribution",
    ],
  },
  {
    title: "qtbot",
    slug: "qtbot",
    url: "https://github.com/naught0/qtbot",
    description: "My personal, multifarious bot for Discord",
    imageUrl: "/qtbot.png",
    videoUrl: "/qtbot.mp4",
    tags: [
      "python",
      "requests",
      "NLTK",
      "web-scraping",
      "APIs",
      "SQL",
      "redis",
      "caching",
      "VPS",
    ],
  },
  {
    title: "Tribalize",
    slug: "tribalize",
    url: "http://www.tribalize.xyz/",
    description:
      "Find unique, off-color Magic: The Gathering tribes to build more interesting decks",
    imageUrl: "/tribalize.png",
    tags: [
      "javascript",
      "react",
      "node",
      "express",
      "prisma",
      "socket.io",
      "SQL",
      "docker",
      "VPS",
      "cronjobs",
    ],
  },
  {
    title: "LogMeIn Log Analyzer",
    slug: "logmein-log-analyzer",
    url: "https://github.com/Naught0/LogMeIn-Log-Analyzer",
    description:
      "A tool made for work to analyze, parse, & filter various log files generated by LogMeIn applications",
    imageUrl:
      "https://camo.githubusercontent.com/4eb1aa02c5de0aab63dd4d35bb1544b02b4c70da911654e2419b02627305baf1/68747470733a2f2f692e696d6775722e636f6d2f537a36504650342e706e67",
    tags: [
      "C#",
      "winforms",
      "desktop app",
      "visual studio",
      "text parsing",
      "version control",
    ],
  },
  {
    title: "Clapback",
    url: "https://jamese.dev/clapback",
    slug: "clapback",
    description:
      "The ultimate website for the refined 21st century conversationalist where you can insert an emoji between each word you type, or generate a moCkINg SpoNGeBob mEMe",
    imageUrl: "/clapback.png",
    tags: ["HTML5", "CSS", "javascript", "jquery"],
  },
].map((proj) => ({
  ...proj,
  hasBlog: existsSync(`./data/posts/${proj.slug}.md`),
}));
