import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, HTMLAttributes, ReactNode } from "react";

const buttonTypeClassName = {
  default:
    "border border-slate-200 hover:border-slate-300 bg-white dark:bg-black dark:text-white dark:border-slate-700 hover:dark:border-slate-500",
  primary: "border bg-blue border:gray shadow-sm",
  info: "border border:gray shadow-sm",
  danger: "border border:gray shadow-sm",
  warning: "border border:gray shadow-sm",
  success: "border border:gray shadow-sm",
};

interface MyButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: "primary" | "info" | "danger" | "warning" | "success";
  square?: boolean;
  round?: boolean;
  children?: ReactNode;
}
const Button: FC<MyButtonProps> = ({
  children,
  className,
  type,
  square,
  round,
  ...props
}) => {
  return (
    <button
      className={`rounded
        ${square ? "p-2 w-10 h-10" : "px-5 py-2"} border ${className || ""} ${
        buttonTypeClassName[type || "default"]
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

type IconTextProps = {
  className?: string;
  text?: string;
  iconRight?: boolean;
  children?: ReactNode;
  icon: IconDefinition;
};
const IconText: FC<IconTextProps> = ({
  icon,
  text,
  className,
  iconRight,
  children,
}) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center gap-1 flex-row flex-nowrap whitespace-nowrap`}
    >
      {!iconRight && <FontAwesomeIcon icon={icon} className="p-1" />}
      {text && <div>{text}</div>}
      {children && children}
      {iconRight && <FontAwesomeIcon icon={icon} />}
    </div>
  );
};

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  text?: string;
  children?: ReactNode;
}

const Link: FC<LinkProps> = ({ href, text, children, ...props }) => {
  return (
    <a href={href} rel="noreferrer" target="_blank" {...props}>
      {text || children || href}
    </a>
  );
};

export { Link, Button, IconText };
