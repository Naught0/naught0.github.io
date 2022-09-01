import { faCloudMoon, faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Theme } from "../App";
import { Button } from "./Components";

interface ThemeButtonProps {
  theme?: Theme;
  className?: string;
  setTheme: (currentTheme?: Theme) => void;
}

export const ThemeButton: FC<ThemeButtonProps> = ({
  theme,
  className,
  setTheme,
}) => {
  return (
    <Button
      className="theme-button fixed top-5 right-5 z-10 opacity-70 hover:opacity-100 transition-opacity bg-indigo-700 dark:bg-orange-400 dark:text-white"
      onClick={() => setTheme(theme)}
      square
    >
      <FontAwesomeIcon icon={theme === Theme.dark ? faCloudSun : faCloudMoon} />
    </Button>
  );
};
