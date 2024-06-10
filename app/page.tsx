import { HomepageHeroContent } from "@/components/homepage-hero-content";
import { Link } from "@/components/link";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="mb-12 flex min-h-screen max-w-screen-md flex-col justify-between">
        <div className="flex flex-grow justify-center">
          <HomepageHeroContent />
        </div>
        <div className="flex flex-row justify-start gap-3 py-3 text-5xl font-bold">
          <Link className="underline underline-offset-8" href="#projects">
            projects
          </Link>
        </div>
      </div>
      <div className="flex w-full justify-center bg-white/5">
        <Projects />
      </div>
    </main>
  );
}
