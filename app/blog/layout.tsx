import { Nav } from "@/components/nav";
import React, { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Nav />
      {props.children}
    </div>
  );
}
