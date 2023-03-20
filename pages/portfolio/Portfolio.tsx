import Carousel from "components/assets/carousel/Carousel";
import ProjectTemplate, { ProjectTemplateProps } from "./ProjectTemplate";

const projects: ProjectTemplateProps[] = [
  {
    title: "3D Rendering",
    description: "",
    img: "/3d.png",
    github: "https://github.com/Rafael3226/Museo-Anatomia",
    url: "https://638e79130bb609247f32cd73--loquacious-axolotl-441ac4.netlify.app/",
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
    url: "https://typing-challeng.netlify.app/",
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
