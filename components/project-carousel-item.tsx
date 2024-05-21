import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CarouselItem } from "./ui/carousel";
import { ExpandableCarouselImage } from "./expandable-carousel-image";

export const ProjectCarouselItem = ({
  tags,
  url,
  title,
  imageUrl,
  videoUrl,
  description,
}: Project) => {
  return (
    <CarouselItem className="flex basis-11/12 flex-wrap gap-3">
      <div className="flex basis-full items-center lg:basis-2/3">
        <ExpandableCarouselImage title={title}>
          <img src={imageUrl} className="" />
        </ExpandableCarouselImage>
      </div>
      <Card className="flex-1 basis-full lg:basis-1/4">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter className="text-wrap">{tags && tags.join(", ")}</CardFooter>
      </Card>
    </CarouselItem>
  );
};
