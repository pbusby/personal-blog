import { COLORS } from './Themes'
import React from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);
  React.useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );
    rawSetColorMode(initialColorValue);
  }, []);
  const setColorMode = (newValue) => {
    const root = window.document.documentElement;
    // 1. Update React color-mode state
    rawSetColorMode(newValue);
    // 2. Update localStorage
    localStorage.setItem('color-mode', newValue);
    // 3. Update each color
    root.style.setProperty(
      '--color-text',
      newValue === 'light' ? COLORS.light.text : COLORS.dark.text
    );
    root.style.setProperty(
      '--color-background',
      newValue === 'light' ? COLORS.light.background : COLORS.dark.background
    );
    root.style.setProperty(
      '--color-nav',
      newValue === 'light' ? COLORS.light.nav : COLORS.dark.nav
    );
  };
  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};



export const ThemeBlockingScript = () => {
	let codeToRunOnClient = `
  (function() {
    function getInitialColorMode() {
      const persistedColorPreference = window.localStorage.getItem('color-mode');
      const hasPersistedPreference = typeof persistedColorPreference === 'string';
    
      // If the user has explicitly chosen light or dark,
      // let's use it. Otherwise, this value will be null.
      if (hasPersistedPreference) {
        return persistedColorPreference;
      }
      // If they haven't been explicit, let's check the media
      // query
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const hasMediaQueryPreference = typeof mql.matches === 'boolean';
      if (hasMediaQueryPreference) {
        return mql.matches ? 'dark' : 'light';
      }
    
      // If they are using a browser/OS that doesn't support
      // color themes, let's default to 'light'.
      return 'light';
    }
    const colorMode = getInitialColorMode();
    const root = document.documentElement;
    root.style.setProperty(
      '--color-text',
      colorMode === 'light'
        ? '${COLORS.light.text}'
        : '${COLORS.dark.text}'
    );
    root.style.setProperty(
      '--color-background',
      colorMode === 'light'
        ? '${COLORS.light.background}'
        : '${COLORS.dark.background}'
    );
    root.style.setProperty(
      '--color-nav',
      colorMode === 'light'
        ? '${COLORS.light.nav}'
        : '${COLORS.dark.nav}'
    );
    root.style.setProperty('--initial-color-mode', colorMode);
  })()`
	// eslint-disable-next-line react/no-danger
	return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}
