import GitHub from "../svg/GitHub";
import LinkedIn from "../svg/LinkedIn";
import MailIcon from "../svg/Mail";
import Phone from "../svg/Phone";
import AnchorTemplate from "./AnchorTemplate";
import ContactItemProps from "./ContactItemProps";

const linkList: ContactItemProps[] = [
  {
    href: "tel:+1 6472957559",
    icon: <Phone />,
    text: "+1 647 295 7559",
  },
  {
    href: "mailto:rafael.uribe.2080@gmail.com",
    icon: <MailIcon />,
    text: "Rafael.Uribe.2080@gmail.com",
  },
  {
    href: "https://www.linkedin.com/in/rafaeluribe2080/",
    icon: <LinkedIn />,
    text: "LinkedIn",
  },
  {
    href: "https://github.com/Rafael3226",
    icon: <GitHub width={20} height={20} />,
    text: "GitHub",
  },
];

function ContactInformation() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {linkList.map(({ href, icon, text }: ContactItemProps, index: number) => (
        <AnchorTemplate key={index} href={href} icon={icon} text={text} />
      ))}
    </div>
  );
}

export default ContactInformation;
