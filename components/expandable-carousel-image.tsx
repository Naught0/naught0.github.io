"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@radix-ui/react-dialog";
import { ReactNode, useState } from "react";
import { DialogHeader } from "./ui/dialog";
import { Button } from "./ui/button";
import { MdClose } from "react-icons/md";
import { createPortal } from "react-dom";

export const ExpandableCarouselImage = (props: {
  children: ReactNode;
  title: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger className="basis-full">{props.children}</DialogTrigger>
      {typeof window !== "undefined" &&
        createPortal(
          <DialogContent className="fixed left-0 top-0 flex h-full w-full flex-col">
            <div className="flex flex-row items-center justify-between px-3 lg:px-6">
              <h1 className="text-xl lg:text-3xl">{props.title}</h1>
              <Button
                variant={"destructive"}
                size="icon"
                className="w-8"
                onClick={() => setOpen(false)}
              >
                <MdClose />
              </Button>
            </div>
            <div className="flex items-center justify-center">
              {props.children}
            </div>
          </DialogContent>,
          document.body,
        )}
    </Dialog>
  );
};
