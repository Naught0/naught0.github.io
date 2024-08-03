import { existsSync } from "fs";

export const projects: Project[] = [
  {
    title: "migr8",
    slug: "migr8",
    description:
      "A production web app used by Recharge customers to migrate data from their old system to ours. Designed and developed from the ground up by yours truly",
    url: "https://getrecharge.com",
    imageUrl: "/migr8.webp",
    tags: [
      "python",
      "SQL",
      "typescript",
      "react",
      "redis",
      "hosting",
      "system design",
      "security",
    ],
  },
  {
    title: "Colorado Avalanche Information Center (CAIC)",
    slug: "caic",
    description:
      "Interactive avalanche forecasts & reports with graphics, maps, data tables, and complex forms",
    imageUrl: "/caic.webp",
    url: "https://avalanche.state.co.us",
    tags: ["react", "typescript", "google maps", "CI/CD"],
  },
  {
    title: "combinator",
    slug: "combinator",
    url: "https://mtgcombinator.com",
    description:
      "Paste in a link to your Magic: The Gathering deck & immediately get an overview of what combos, loops, and shenanigans are inside. Also suggests combos that only require a single extra card",
    imageUrl: "/combinator.webp",
    tags: [
      "python",
      "fastapi",
      "pandas",
      "typescript",
      "react",
      "analytics",
      "hosting",
      "docker",
    ],
    sourceUrl: "https://github.com/naught0/combinator",
  },
  {
    title: "slacker_news",
    slug: "slackernews",
    url: "https://slackernews.jamese.dev",
    description:
      "A mobile-responsive frontend for [Hacker News](https://news.ycombinator.com) with collapsible comments and crucially, dark mode",
    sourceUrl: "https://github.com/naught0/slackernews",
    imageUrl: "/slackernews.webp",
    tags: ["next.js", "typescript", "vercel", "SSR"],
  },
  {
    title: "jamese.dev",
    slug: "jamese-dev",
    description: "My personal website displaying some of my projects & skills",
    imageUrl: "/jamese-dev.webp",
    tags: ["typescript", "next.js", "tailwind", "hosting", "SSG"],
    sourceUrl: "https://github.com/naught0/naught0.github.io",
  },
  {
    title: "asyncurban",
    url: "https://asyncurban.readthedocs.io",
    sourceUrl: "https://github.com/naught0/asyncurban",
    slug: "asyncurban",
    description:
      "An asynchronous python wrapper around the UrbanDictionary API. Used by >8,000 projects",
    imageUrl: "/asyncurban.webp",
    tags: ["python", "async", "API", "documentation", "package distribution"],
  },
  {
    title: "qtbot",
    slug: "qtbot",
    url: "https://github.com/naught0/qtbot",
    sourceUrl: "https://github.com/naught0/qtbot",
    description:
      "My personal, multifarious bot for Discord with over 70 commands",
    imageUrl: "/qtbot.webp",
    tags: ["python", "scraping", "API", "SQL", "redis"],
  },
  {
    title: "LogMeIn Log Analyzer",
    slug: "logmein-log-analyzer",
    url: "https://github.com/Naught0/LogMeIn-Log-Analyzer",
    sourceUrl: "https://github.com/Naught0/LogMeIn-Log-Analyzer",
    description:
      "A tool to analyze, parse, & filter various log files generated by LogMeIn applications. Created to accelerate my L2 tech support team",
    imageUrl: "/logmein-log-analyzer.webp",
    tags: ["C#", "desktop app", "visual studio"],
  },
  {
    title: "Clapback",
    url: "https://jamese.dev/clapback",
    sourceUrl: "https://github.com/naught0/clapback",
    slug: "clapback",
    description:
      "The ultimate website for the refined 21st century conversationalist. You can insert an emoji between each word you type or generate a moCkINg SpoNGeBob mEMe – the possibilities are endless",
    imageUrl: "/clapback.webp",
    tags: ["HTML", "CSS", "javascript", "jquery"],
  },
].map((proj) => ({
  ...proj,
  hasBlog: existsSync(`./data/posts/${proj.slug}.md`),
}));
