import A from "components/styled/a";
import ContactItemProps from "./ContactItemProps";

function AnchorTemplate({ href, icon, text }: ContactItemProps) {
  return (
    <A href={href} target="_blank">
      <div
        style={{
          padding: "0px 5px",
        }}
      >
        {icon}
      </div>
      <div>{text}</div>
    </A>
  );
}

export default AnchorTemplate;
