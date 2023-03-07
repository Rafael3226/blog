import A from "components/styled/a";
import ContactItemProps from "./ContactItemProps";

function AnchorTemplate({ href, icon, text }: ContactItemProps) {
  return (
    <div>
      <A href={href}>
        {icon}
        <span>{text}</span>
      </A>
    </div>
  );
}

export default AnchorTemplate;
