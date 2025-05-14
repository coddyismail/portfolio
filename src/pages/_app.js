// pages/_app.js

import '../src/css/globals.css'; // <-- Move the import here

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
