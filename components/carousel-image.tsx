"use client";
import { ReactNode } from "react";

export const CarouselImage = (props: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div className="flex w-full items-center justify-center">
      {props.children}
    </div>
  );
};
