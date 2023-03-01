import Center from "components/styled/center/Center";
import Summary from "./components/summary";
import Experience from "./components/experience";
import Education from "./components/education";
import Skills from "./components/skills/Skills";

function Resume() {
  return (
    <Center>
      <Summary />
      <Experience />
      <Education />
      <Skills />
    </Center>
  );
}

export default Resume;
