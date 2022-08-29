import { useEffect, useState } from "react";
import { Blurb } from "./Components/Blurb";
import { ThemeButton } from "./Components/ThemeButton";
import "animate.css";
import { Hero } from "./Components/Layout";
import { projects } from "./Data/projects";
import { ProjectCard } from "./Components/ProjectCard";

export enum Theme {
  dark = "dark",
  light = "light",
}

export const App = () => {
  const [theme, setTheme] = useState<Theme>(Theme.dark);
  useEffect(() => {
    const theme = localStorage.theme;
    if (
      theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme(Theme.dark);
    } else {
      setTheme(Theme.light);
    }
  }, []);

  useEffect(() => {
    if (theme === Theme.dark)
      return document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <main className="h-full w-full dark:bg-black transition-colors">
      <ThemeButton
        setTheme={() =>
          setTheme(theme === Theme.dark ? Theme.light : Theme.dark)
        }
        theme={theme}
      />
      <Blurb />
      <Hero className="bg-gradient-to-tr from-white to-zinc-300 dark:from-black dark:to-slate-900 h-full min-h-fit p-5 lg:p-16 transition-colors">
        <p className="text-7xl dark:text-white">Projects</p>
        <div className="flex space-around sm:justify-center lg:justify-around min-h-screen h-full flex-wrap mt-12 gap-6">
          {projects.map((project, idx) => {
            return <ProjectCard {...project} />;
          })}
        </div>
      </Hero>
    </main>
  );
};
