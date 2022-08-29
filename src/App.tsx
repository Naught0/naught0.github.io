import { useEffect, useState } from "react";
import { Blurb } from "./Components/Blurb";
import { ThemeButton } from "./Components/ThemeButton";
import { Hero } from "./Components/Layout";
import { projects } from "./Data/projects";
import { ProjectCard } from "./Components/ProjectCard";

export enum Theme {
  dark = "dark",
  light = "light",
}

export const App = () => {
  const [theme, setTheme] = useState<Theme>();
  useEffect(() => {
    const theme = localStorage.theme;
    if (theme === "dark") {
      setTheme(Theme.dark);
    } else {
      setTheme(Theme.light);
    }
    console.log(localStorage);
  }, []);

  useEffect(() => {
    if (!theme) return;
    
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
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
      <Hero className="bg-gradient-to-tr from-white to-slate-300 dark:from-slate-900 dark:to-black h-full min-h-fit p-5 lg:p-16f">
        <p className="text-7xl dark:text-white">Projects</p>
        <div className="flex items-baseline justify-around min-h-screen h-full flex-wrap mt-12 gap-6">
          {projects.map((project, idx) => {
            return (
              <ProjectCard key={`${project.title}-card-${idx}`} {...project} />
            );
          })}
        </div>
      </Hero>
    </main>
  );
};
