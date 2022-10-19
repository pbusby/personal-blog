import SvgCrescentMoon from "../public/images/crescent_moon.js";
import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeBlockingScript";

export const ToggleThemeBtn = ({toggleTheme}) => {
  const { colorMode, setColorMode } = useContext(ThemeContext);
  if (!colorMode) {
    return null;
  }

  return (
    <SvgCrescentMoon onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')} fill={"var(--color-text)"} className="next-link"></SvgCrescentMoon>
  )
}

export default ToggleThemeBtn