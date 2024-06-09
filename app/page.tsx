import { ProjectCarouselItem } from "@/components/project-carousel-item";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-10/12">
        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project) => (
              <ProjectCarouselItem key={project.title} {...project} />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
}
