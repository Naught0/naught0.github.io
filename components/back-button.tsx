"use client";

import { Button } from "./ui/button";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const { back } = useRouter();
  return (
    <Button className="text-2xl" onClick={back}>
      <BiArrowBack /> back
    </Button>
  );
};
