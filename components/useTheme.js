import React, { useState, useEffect } from 'react';

export const useTheme = () => {
  const [ theme, setTheme ] = useState('light');
  const [ componentMounted, setComponentMounted ] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light')
    console.log(`theme set to ${theme}!`)
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setMode(localTheme)
    setComponentMounted(true);
  }, []);
  return [theme, toggleTheme, componentMounted]
};