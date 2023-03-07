import GitHub from "../svg/github";
import LinkedIn from "../svg/linkedin";
import Mail from "../svg/mail";
import AnchorTemplate from "./AnchorTemplate";
import ContactItemProps from "./ContactItemProps";

const linkList: ContactItemProps[] = [
  {
    href: "tel:+1 6472957559",
    icon: <Mail />,
    text: "+1 647 295 7559",
  },
  {
    href: "mailto:rafael.uribe.2080@gmail.com",
    icon: <Mail />,
    text: "Rafael.Uribe.2080@gmail.com",
  },
  {
    href: "https://www.linkedin.com/in/rafaeluribe2080/",
    icon: <LinkedIn />,
    text: "LinkedIn",
  },
  {
    href: "tel:+1 6472957559",
    icon: <GitHub />,
    text: " GitHub",
  },
];

function ContactInformation() {
  return (
    <div>
      {linkList.map(({ href, icon, text }: ContactItemProps) => (
        <AnchorTemplate href={href} icon={icon} text={text} />
      ))}
    </div>
  );
}

export default ContactInformation;
