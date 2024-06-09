import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col justify-center">
        <p className="text-3xl font-black lg:text-6xl">James E</p>
      </div>
      <div className="flex flex-col justify-center gap-6 py-12 lg:max-w-screen-lg">
        <p className="text-center text-3xl font-black lg:text-5xl">Projects</p>
        <div className="mx-6 flex flex-row flex-wrap justify-center gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}
