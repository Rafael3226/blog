import { ReactElement } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Head from "next/head";

function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Head>
        <title>Tech Blog - Rafael Uribe</title>
        <meta name="description" content="Technology Blog." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
