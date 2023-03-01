import { ReactElement } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import PageHead from "./head";

function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <PageHead />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
