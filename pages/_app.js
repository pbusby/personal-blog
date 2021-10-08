import '../styles/globals.css'
import Header from '../components/Header.js'

function MyApp({ Component, pageProps }) {
  return (
  <>
      <Header></Header>
      <Component {...pageProps} />
  </>
  )
}

export default MyApp
