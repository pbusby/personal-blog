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

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <div id="modal-root"></div>
        <div id="hamburger-root"></div>
      </body>
    </Html>
  )
}