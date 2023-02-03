import { ReactElement } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Head>
        <title>Rafael Uribe</title>
        <meta name="description" content="Technology Blog." />
        <link rel="icon" href="/images/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
