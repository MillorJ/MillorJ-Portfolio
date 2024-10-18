import Navbar from "../components/Navbar";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* This is where you add the favicon and title */}
        <title>MillorJ Portfolio</title>
        <meta name="description" content="Your website description" />
        <link rel="icon" href="/assets/mylogo.jpg" />
      </Head>
      
      {/* Keep your existing Navbar */}
      <Navbar />
      
      {/* Render the rest of the pages */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
