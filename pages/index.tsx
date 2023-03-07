import ContactInformation from "components/assets/contact-information";

export default function Home() {
  return (
    <>
      <h1>Rafael Uribe</h1>
      <h2>Software Engineer</h2>
      <main>
        <h2>Contact Information</h2>
        <p>
          My name is Rafael Uribe and I am a software engineer based in Toronto,
          Ontario, Canada. If you'd like to get in touch with me, you can email
          me at:
        </p>
        <ContactInformation />
      </main>
    </>
  );
}
