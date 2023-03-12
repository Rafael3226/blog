import {
  CSS,
  Express,
  GitHub,
  HTMLIcon,
  JSIcon,
  ReactIcon,
  Redux,
  ThreeJS,
  TSIcon,
} from "components/assets/svg";
import Image from "next/image";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: rgba(0, 0, 0);
  width: 350px;
  height: 600px;
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 600px;
  }
  @media (min-width: 992px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1000px;
  }
`;
const ProjectImage = styled(Image)`
  margin-top: 20px;
  height: auto;
  width: 100%;
  border-radius: 10px;
`;
const ProjectLink = styled.a`
  height: 100px;
  width: 100px;
  background-color: gray;
  border-color: #fff;
  border-width: 5px;
  color: #fff;
`;

export interface ProjectTemplateProps {
  title: string;
  description: string;
  img: string;
  github: string;
  url: string;
}

function ProjectTemplate({
  title,
  description,
  img,
  github,
  url,
}: ProjectTemplateProps) {
  return (
    <Card>
      <h1>{title}</h1>

      <p style={{ flexGrow: 1 }}>{description}</p>
      <div>
        <ProjectLink href={github} target="_blank" rel="noopener noreferrer">
          Code
        </ProjectLink>
        <ProjectLink href={url} target="_blank" rel="noopener noreferrer">
          {"Try here"}
        </ProjectLink>
      </div>

      <div style={{ margin: "30px" }}>
        <ThreeJS />
        <Express />
        <ReactIcon />
        <Redux />
        <HTMLIcon />
        <CSS />
        <JSIcon />
        <TSIcon />
      </div>
    </Card>
  );
}

export default ProjectTemplate;
