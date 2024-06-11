"use client";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";

export const ToTopButton = () => {
  return (
    <Button
      className="fixed bottom-12 right-12 bg-black/30"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      size="icon"
    >
      <ArrowUp />
    </Button>
  );
};
