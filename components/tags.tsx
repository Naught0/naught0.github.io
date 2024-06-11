import React from "react";
import { Badge } from "./ui/badge";

export const Tags = (props: { tags: string[] }) => {
  return (
    <span className="inline-flex flex-wrap gap-2">
      {props.tags.map((tag) => (
        <Badge key={tag} variant="secondary" className="text-nowrap">
          {tag}
        </Badge>
      ))}
    </span>
  );
};
