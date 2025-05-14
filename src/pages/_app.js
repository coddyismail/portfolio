// pages/_app.js

import '../css/globals.css'; // ✅ CORRECT
 // <-- Move the import here

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
