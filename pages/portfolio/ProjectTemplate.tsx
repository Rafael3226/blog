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
  padding: 10px;
  height: 400px;
  width: 600px;
  border-radius: 10px;

  background-color: #fff;
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

      <ProjectImage
        src={img}
        alt={title}
        width="64"
        height="64"
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
      <p>{description}</p>
      <div>
        <a href={github} target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Project
        </a>
      </div>
    </Card>
  );
}

export default ProjectTemplate;
