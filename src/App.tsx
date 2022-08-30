import { useEffect, useState } from "react";
import { Blurb } from "./Components/Blurb";
import { ThemeButton } from "./Components/ThemeButton";
import { Hero } from "./Components/Layout";
import { projects } from "./Data/projects";
import { ProjectCard, ProjectCardProps } from "./Components/ProjectCard";
import "animate.css";

export enum Theme {
  dark = "dark",
  light = "light",
}

export const App = () => {
  const [theme, setTheme] = useState<Theme>();
  const [selectedProjectCard, setSelectedProjectCard] =
    useState<ProjectCardProps>();
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
    <main className="h-full w-full">
      <ThemeButton
        setTheme={() =>
          setTheme(theme === Theme.dark ? Theme.light : Theme.dark)
        }
        theme={theme}
      />
      <Blurb />
      <Hero className="dark:bg-black h-full min-h-fit w-full p-5 lg:p-16 bg-pipes">
        <p className="text-7xl dark:text-white">Projects</p>
        {!!selectedProjectCard ? (
          <div className="my-10">
            <ProjectCard
              canGrow={true}
              {...selectedProjectCard}
              expand={() => setSelectedProjectCard(undefined)}
            />
          </div>
        ) : (
          <div className="flex items-start justify-evenly min-h-screen h-full flex-wrap mt-12 gap-6">
            {projects.map((project, idx) => {
              return (
                <ProjectCard
                  key={`${project.title}-card-${idx}`}
                  {...project}
                  expand={() =>
                    setSelectedProjectCard(project as ProjectCardProps)
                  }
                />
              );
            })}
          </div>
        )}
      </Hero>
    </main>
  );
};
