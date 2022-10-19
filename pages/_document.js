// import Document, { Html, Head, Main, NextScript } from "next/document";

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


import { Html, Head, Main, NextScript } from 'next/document'
import { ThemeBlockingScript } from '../components/ThemeBlockingScript'

export default function Document() {
  return (
    <Html>
      <Head>
      </Head>
      <body>
        <script>0</script>
        <ThemeBlockingScript />
        <Main />
        <NextScript />
        <div id="modal-root"></div>
        <div id="hamburger-root"></div>
      </body>
    </Html>
  )
}