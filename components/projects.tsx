import { projects } from "@/data/projects";
import React from "react";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <div className="flex flex-col justify-center p-6 md:p-12 lg:max-w-screen-xl">
      <p
        className="font-display mb-12 text-5xl font-black lg:text-7xl"
        id="projects"
      >
        projects
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-12">
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </div>
  );
}
