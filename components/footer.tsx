import { Suspense } from "react";
import { Link } from "./link";
import { Randmoji } from "./randmoji";

export const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center gap-6 border-t-2 border-t-slate-300 bg-black py-24 text-sm sm:text-base lg:py-36">
      <p>
        made by{" "}
        <Link href="https://github.com/naught0" className="underline">
          james
        </Link>{" "}
        with{" "}
        <Suspense>
          <Randmoji />
        </Suspense>
      </p>
      <p>
        <Link
          href="https://github.com/naught0/naught0.github.io"
          className="underline"
        >
          source
        </Link>
      </p>
    </div>
  );
};
