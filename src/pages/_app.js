// pages/_app.js

import '../css/globals.css'; // ✅ CORRECT


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
