import DarkBackground from "components/assets/contact-information/DarkBackground";
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
import styled from "styled-components";
import Project from "./Project";

const ProjectLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  margin: 0 5px;
  padding: 16px 32px;
  color: #fff;
  background: #000;
  font-size: 24px;
  font-weight: bold;
  border-radius: 12px;
  border-color: #fff;
  border: 2px solid;

  &:hover {
    background-color: #451e3e;
  }
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
    <Project>
      <h1>{title}</h1>
      <div style={{ flexGrow: 1 }}>
        <img style={{ height: "300px" }} src={img} />
      </div>
      <div>
        <ProjectLink href={github}>Code</ProjectLink>
        <ProjectLink href={url}>{"Try here"}</ProjectLink>
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
    </Project>
  );
}

export default ProjectTemplate;
