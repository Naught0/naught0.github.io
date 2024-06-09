"use client";
import React from "react";
import { CarouselItem } from "./ui/carousel";
import { CarouselImage } from "./carousel-image";
import {
  SheetTrigger,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";
import { Badge } from "./ui/badge";

export const ProjectCarouselItem = ({
  tags,
  url,
  title,
  imageUrl,
  videoUrl,
  description,
}: Project) => {
  const className = `absolute bottom-0 left-0 w-full bg-opacity-10 transition-transform`;
  return (
    <CarouselItem className="flex w-full basis-full flex-wrap justify-center gap-3">
      <div className="relative flex basis-full select-none items-center">
        <div className="absolute left-0 top-0 w-full bg-black/50 py-6 text-2xl font-black lg:text-4xl">
          {title}
        </div>
        <CarouselImage title={title}>
          <img src={imageUrl} className="max-w-screen max-h-screen w-fit" />
        </CarouselImage>

        <Sheet modal={false}>
          <div
            className={`${className} flex w-full flex-col items-center justify-center bg-black/50 py-6 text-lg lg:py-12 lg:text-xl`}
          >
            <SheetTrigger>more info</SheetTrigger>
          </div>
          <SheetContent side={"bottom"} className="py-6 lg:py-12">
            <SheetHeader>
              <SheetTitle className="text-lg lg:text-3xl">{title}</SheetTitle>
              <SheetDescription>
                <div className="flex flex-col gap-3">
                  <div>{description}</div>
                  <div className="flex flex-grow-0 flex-wrap gap-2 text-nowrap">
                    {tags.map((tag) => (
                      <Badge key={tag} variant={"secondary"}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </CarouselItem>
  );
};
