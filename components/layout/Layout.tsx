import { ReactElement } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Head from "next/head";
import Container from "../container";

function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Head>
        <title>Tech Blog - Rafael Uribe</title>
        <meta name="description" content="Technology Blog." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
