import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/coderismail-main.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Ismail's Portfolio Website" />
        {/* You can add more meta tags here if needed */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
