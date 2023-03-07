import ContactInformation from "components/assets/contact-information";

const mainStyle = {
  paddingTop: "30vh",
  paddingLeft: "10px",
};
const sectionStyle = {
  height: "85vh",
  backgroundColor: "RGB(0,0,0,0.5)",
  marginBottom: "10px",
};
const h1Style = {
  fontSize: "4rem",
};
const h2Style = {
  fontSize: "2rem",
};
const divStyle = {
  padding: "10px",
};

export default function Home() {
  return (
    <>
      <section style={sectionStyle}>
        <main style={mainStyle}>
          <h1 style={h1Style}>Rafael Uribe</h1>
          <h2 style={h2Style}>Software Engineer</h2>
        </main>
      </section>
      <section style={sectionStyle}>
        <div style={divStyle}>
          <h2 style={h2Style}>Contact Information</h2>
          <p>
            My name is Rafael Uribe and I am a software engineer based in
            Toronto, Ontario, Canada. If you'd like to get in touch with me, you
            can email me at:
          </p>
          <ContactInformation />
        </div>
      </section>
    </>
  );
}
