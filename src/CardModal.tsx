import { FC } from "react";
import { ProjectCard, ProjectCardProps } from "./Components/ProjectCard";

interface CardModalProps {
  data: ProjectCardProps;
}
export const CardModal: FC<CardModalProps> = ({ data }) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0">
      <div className="flex justify-center items-center w-full h-full">
        <div className="width-2/3">
          <ProjectCard {...data} />
        </div>
      </div>
    </div>
  );
};
