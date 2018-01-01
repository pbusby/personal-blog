import '../styles/globals.css'
import Header from '../components/Header.js'
import React, { useState } from 'react'

function MyApp({ Component, pageProps }) {
  // [colorTheme, setTheme] = useState()
  return (
  <>
      <Header></Header>
      <Component {...pageProps} />
  </>
  )
}

export default MyApp
