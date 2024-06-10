import { Nav } from "@/components/nav";
import React, { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      {props.children}
    </div>
  );
}
