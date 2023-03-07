import { ReactElement } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import PageHead from "./head";
import Container from "components/styled/container";

function Layout({ children }: { children: ReactElement }) {
  return (
    <Container>
      <PageHead />
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
}

export default Layout;
