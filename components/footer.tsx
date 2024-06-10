import { Link } from "./link";

export const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center border-t-2 border-t-slate-300 bg-black py-24 text-sm lg:py-36">
      <p>
        made by{" "}
        <Link href="https://github.com/naught0" className="underline">
          james
        </Link>{" "}
        with 🐐
      </p>
    </div>
  );
};
