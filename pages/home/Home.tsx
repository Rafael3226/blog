import ContactInformation from "components/assets/contact-information";
import styled from "styled-components";

const TwoColumns = styled.section`
  min-height: 640px;
  margin-bottom: 10px;

  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Column = styled.div`
  margin-top: 30px;
  @media (min-width: 768px) {
    margin-top: 25vh;
  }
`;

const Name = styled.h1`
  font-size: 5rem;
  margin: 0px;
`;
const Degree = styled.h2`
  font-size: 2rem;
`;

export default function Home() {
  return (
    <TwoColumns>
      <Column>
        <main>
          <Name>Rafael Uribe</Name>
          <Degree>Software Engineer</Degree>
        </main>
      </Column>
      <Column>
        <ContactInformation />
      </Column>
    </TwoColumns>
  );
}
