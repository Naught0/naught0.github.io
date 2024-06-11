import { BackButton } from "@/components/back-button";
import { ToTopButton } from "@/components/to-top-btn";
import React, { PropsWithChildren } from "react";
export const metadata = {
  authors: { name: "James E", url: "https://jamese.dev" },
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-6">
      <div className="prose lg:prose-lg dark:prose-invert max-w-[95vw] pb-24 md:max-w-screen-sm lg:max-w-screen-md">
        <div className="py-6">
          <BackButton />
        </div>
        {children}
      </div>
      <ToTopButton />
    </div>
  );
}
