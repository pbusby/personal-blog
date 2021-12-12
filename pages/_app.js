import '../styles/globals.css'
import { useTheme } from '../components/useTheme.js'
import { GlobalStyles } from '../components/globalStyles.js'
import Footer from '../components/Footer.js'
import { MyThemeProvider } from '../context/global-data.js'


function MyApp({ Component, pageProps }) {
  const [theme, toggleTheme, componentMounted] = useTheme();

  if (!componentMounted) return <div/>
  return (
  <MyThemeProvider>
      <>
        <GlobalStyles/>
        <Component {...pageProps} />
        {/* <Footer></Footer> */}
      </>
  </MyThemeProvider>
  )
}

export default MyApp
