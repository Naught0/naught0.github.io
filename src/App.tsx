import { useEffect, useRef, useState } from "react";
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
  const [selectedIndex, setSelectedIndex] = useState<number>();
  const selectedProjectRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!selectedIndex) return;

    selectedProjectRef.current?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }, [selectedIndex]);

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
        {selectedIndex !== undefined ? (
          <div className="my-10" ref={selectedProjectRef}>
            <ProjectCard
              canExpand={true}
              toggleExpand={setSelectedIndex}
              index={selectedIndex}
              {...projects[selectedIndex]}
            />
          </div>
        ) : (
          <div className="flex flex-row min-h-screen h-full flex-wrap gap-5 mt-12">
            {projects.map((project, idx) => {
              return (
                <ProjectCard
                  canExpand={false}
                  index={idx}
                  key={`${project.title}-card-${idx}`}
                  {...project}
                  toggleExpand={setSelectedIndex}
                />
              );
            })}
          </div>
        )}
      </Hero>
    </main>
  );
};
