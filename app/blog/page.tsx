import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export default function Page() {
  return (
    <div className="flex min-h-screen justify-center px-6 sm:px-12">
      <article className="lg-py-24 flex flex-col items-center gap-6 py-12 sm:max-w-screen-lg sm:gap-12">
        <p className="font-display text-6xl font-black">Blog</p>
        {projects
          .filter((p) => p.hasBlog)
          .map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
      </article>
    </div>
  );
}
