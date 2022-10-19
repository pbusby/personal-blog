import { createContext, useContext, useCallback, useState } from 'react'
import { ThemeProvider, ThemeContext } from 'styled-components'
import { darkTheme, lightTheme } from '../components/Themes.js'
import { useTheme } from '../components/useTheme.js'

export const MyThemeContext = createContext({
  // (changes) => console.error("attempted to set theme outside of a MyThemeContext.Provider")
  myTheme: 'light',
  updateMyTheme: () => {}
})



export const MyThemeProvider = ({ children }) => {
  // https://www.joshwcomeau.com/react/dark-mode/
  // https://github.com/vercel/next.js/discussions/12533
  const [theme, toggleTheme, componentMounted] = useTheme();
  // const theme = useTheme();

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  const [myTheme, setMyTheme] = useState(themeMode)

  // const updateMyTheme = useCallback(
  //   (changes) => {

  //   setMyTheme({...myTheme, ...changes})
  //   },
  //   [myTheme, setMyTheme]
  // )


  console.log('myTheme', myTheme)
  console.log('ThemeContext', ThemeContext)

  const updateMyTheme = (theme) => {
    console.log('Updating theme from provider', theme)
    setMyTheme(theme)
  }

  return (
    <ThemeProvider theme={myTheme}>
      <MyThemeContext.Provider value={{data: myTheme, updateTheme: updateMyTheme}}>
        {children}
      </MyThemeContext.Provider>
    </ThemeProvider>
  )
}

export const useUpdateMyTheme = () => { useContext(MyThemeContext) };

// export function useMyTheme() {
//   const context = useContext(MyThemeContext)
//   if (!context)
//     throw new Error('useMyTheme must be used inside a `MyThemeProvider`')
//   return context
// }
