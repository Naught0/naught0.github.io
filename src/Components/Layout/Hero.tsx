import { FC, HTMLAttributes, ReactNode } from "react";

interface HeroProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  className?: string;
}
export const Hero: FC<HeroProps> = ({ children, className, ...props }) => {
  return (
    <section className={`min-h-screen ${className || ""}`} {...props}>
      {children}
    </section>
  );
};
