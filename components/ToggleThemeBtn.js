import SvgCrescentMoon from "../public/images/crescent_moon.js";

export const ToggleThemeBtn = ({themeMode, toggleTheme}) => {
  return (
    <SvgCrescentMoon onClick={toggleTheme} fill={themeMode.text} className="next-link"></SvgCrescentMoon>
  )
}

export default ToggleThemeBtn