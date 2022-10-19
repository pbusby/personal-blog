// class MainDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx);
//     return { ...initialProps };
//   }

//   render() {
//     return (
//       <Html>
//         <Head />
//         <body>
//           <Main />
//           <NextScript />
//           {/* <div id="modal-root"></div> */}
//         </body>
//       </Html>
//     );
//   }
// }

// export default MainDocument;

import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ThemeBlockingScript } from '../components/ThemeBlockingScript'

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet()
		const page = renderPage(
			(App) => (props) => sheet.collectStyles(<App {...props} />)
		)
		const styleTags = sheet.getStyleElement()
		return { ...page, styleTags }
	}

	render() {
		return (
			<Html>
				<Head>{this.props.styleTags}</Head>
				<body>
					<ThemeBlockingScript />
					<Main />
					<NextScript />
					<div id="modal-root"></div>
					<div id="hamburger-root"></div>
				</body>
			</Html>
		)
	}
}
