import { HomepageHeroContent } from "@/components/homepage-hero-content";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="mb-12 flex min-h-screen max-w-screen-md flex-col justify-between">
        <div className="flex flex-grow flex-col justify-center">
          <HomepageHeroContent />
          <div className="flex flex-row justify-start gap-3 py-3 text-5xl font-bold"></div>
        </div>
      </div>
      <div className="flex w-full justify-center bg-background">
        <Projects />
      </div>
    </main>
  );
}
