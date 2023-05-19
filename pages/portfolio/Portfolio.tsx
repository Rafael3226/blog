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
    title: "Image Generation",
    description: "",
    img: "/gen.png",
    github: "https://github.com/Rafael3226/dall-e-client ",
    url: "https://elaborate-pavlova-4b9370.netlify.app/",
  },
  {
    title: "Social Network",
    description: "",
    img: "/sn.png",
    github: "https://github.com/Rafael3226/social-network-example-client",
    url: "https://social-network-4787e.web.app/",
  },
  {
    title: "ECommerce",
    description: "",
    img: "/ec.png",
    github: "https://github.com/Rafael3226/online-store",
    url: "https://onlinestore-dd493.web.app/",
  },
  {
    title: "Typing Challenge",
    description: "",
    img: "/typing.png",
    github: "https://github.com/Rafael3226/typing-challenge",
    url: "https://typing-challeng.netlify.app/",
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
