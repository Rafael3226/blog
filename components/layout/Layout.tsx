import { ReactElement } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import PageHead from "./head";
import Container from "components/styled/container";

function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <PageHead />
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "90vh",
        }}
      >
        <Container
          style={{
            flexGrow: 1,
          }}
        >
          {children}
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
