import Carousel from "components/assets/carousel/Carousel";
import ProjectTemplate, { ProjectTemplateProps } from "./ProjectTemplate";

const projects: ProjectTemplateProps[] = [
  {
    title: "3D Rendering",
    description: "",
    img: "/blog.png",
    github: "",
    url: "",
  },
  {
    title: "Social Network",
    description: "",
    img: "/blog.png",
    github: "https://github.com/Rafael3226/social-network-example-client",
    url: "",
  },
  {
    title: "ECommerce",
    description: "",
    img: "/blog.png",
    github: "https://github.com/Rafael3226/online-store",
    url: "",
  },
  {
    title: "Typing Challenge",
    description: "",
    img: "/blog.png",
    github: "https://github.com/Rafael3226/typing-challenge",
    url: "",
  },
  {
    title: "Green House Automation",
    description: "",
    img: "/blog.png",
    github: "https://github.com/Rafael3226/Green-House",
    url: "",
  },
  {
    title: "Blog",
    description: "",
    img: "/blog.png",
    github: "https://github.com/Rafael3226/blog",
    url: "",
  },
];

function Portfolio() {
  return (
    <Carousel
      items={projects.map((project: ProjectTemplateProps) => (
        <ProjectTemplate {...project} />
      ))}
    />
  );
}

export default Portfolio;
