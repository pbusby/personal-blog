import '../styles/globals.css'
import { useState } from 'react'
import { useTheme } from '../components/useTheme.js'
import { ApolloProvider } from '@apollo/client'
import apolloClient from '../lib/apollo'
import { ThemeProvider } from '../components/ThemeBlockingScript'
import { NavContext } from '../contexts/navContext'

function MyApp({ Component, pageProps }) {
	const [componentMounted] = useTheme()
	const [isPostHeaderVisible, setIsPostHeaderVisible] = useState(false)

	const getLayout = Component.getLayout || ((page) => page)

	if (!componentMounted) return <div />
	return (
		<ApolloProvider client={apolloClient}>
				<ThemeProvider>
					<NavContext.Provider
						value={[isPostHeaderVisible, setIsPostHeaderVisible]}
					>
						<>
							{/* <Header></Header> */}
							{/* <Component {...pageProps} /> */}
							{/* <Footer></Footer> */}
							{getLayout(<Component {...pageProps} />)}
						</>
					</NavContext.Provider>
				</ThemeProvider>
		</ApolloProvider>
	)
}

export default MyApp
