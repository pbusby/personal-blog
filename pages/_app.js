import '../styles/globals.css'
import { useTheme } from '../components/useTheme.js'
import { GlobalStyles } from '../components/globalStyles.js'
import Footer from '../components/Footer.js'
import { MyThemeProvider } from '../context/global-data.js'
import Header from '../components/Header'


function MyApp({ Component, pageProps }) {
  const [theme, toggleTheme, componentMounted] = useTheme();

  let isMobile
  if (typeof window !== "undefined") {
    isMobile = window.matchMedia('(max-width: 992px)').matches
  }

  if (!componentMounted) return <div/>
  return (
  <MyThemeProvider>
      <>
        <script defer src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"></script>
        <GlobalStyles/>
        <Header isMobile={isMobile}></Header>
        <Component {...pageProps} />
        {/* <Footer></Footer> */}
      </>
  </MyThemeProvider>
  )
}

export default MyApp
