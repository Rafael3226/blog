import ContactInformation from "components/assets/contact-information";
import styled from "styled-components";
import { Column, TwoColumns } from "../../components/styled/two-columns";

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
