import { ReactElement } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import PageHead from "./head";
import Container from "components/styled/container";

function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Container
        style={{
          flexGrow: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "95vh",
          }}
        >
          <PageHead />
          <Navbar />
          {children}
        </div>
        <Footer />
      </Container>
    </>
  );
}

export default Layout;
