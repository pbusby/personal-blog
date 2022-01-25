import '../styles/globals.css'
import { useTheme } from '../components/useTheme.js'
import axios from 'axios'
import { GlobalStyles } from '../components/globalStyles.js'
import Footer from '../components/Footer.js'
import { ApolloProvider } from '@apollo/client'
import apolloClient from '../lib/apollo'
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
    <ApolloProvider client={apolloClient}>
      <MyThemeProvider>
          <>
            <GlobalStyles/>
            <Header isMobile={isMobile}></Header>
            <Component {...pageProps} />
            {/* <Footer></Footer> */}
          </>
      </MyThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
