import Bold from "components/styled/bold";
import P from "components/styled/p";
import { Column, TwoColumns } from "pages/home/TwoColumns";

export default function Summary() {
  return (
    <>
      <h2>Summary</h2>
      <TwoColumns>
        <Column></Column>
        <Column>
          <P>
            I have extensive experience as a software engineer, with a focus on
            implementing <Bold>CI/CD</Bold> and using agile methodologies like
            <Bold> SCRUM</Bold> and <Bold>DevOps</Bold> . I am highly passionate
            about both hardware and open-source software, and I am always
            looking for new and exciting projects to work on. I believe that my
            combination of technical skills and creative problem-solving
            abilities make me an asset to any development team.
          </P>
        </Column>
      </TwoColumns>
    </>
  );
}
