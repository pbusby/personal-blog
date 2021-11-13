// import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header.js'
import { useTheme } from '../components/useTheme.js'
import { darkTheme, lightTheme } from '../components/Themes.js'
import { GlobalStyles } from '../components/globalStyles.js'
import { ToggleThemeBtn } from '../components/ToggleThemeBtn.js'

function MyApp({ Component, pageProps }) {
  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  if (!componentMounted) return <div/>
  return (
  <ThemeProvider theme={themeMode}>
    <>
      <GlobalStyles/>
      <Header></Header>
      <ToggleThemeBtn themeMode={themeMode} toggleTheme={toggleTheme}></ToggleThemeBtn>
      <Component {...pageProps} />
    </>
  </ThemeProvider>
  )
}

export default MyApp
