import A from "components/styled/a";
import ContactItemProps from "./ContactItemProps";
import DarkBackground from "./DarkBackground";

function AnchorTemplate({ href, icon, text }: ContactItemProps) {
  return (
    <A href={href} target="_blank">
      <DarkBackground>
        <div
          style={{
            padding: "0px 5px",
          }}
        >
          {icon}
        </div>
        <span>{text}</span>
      </DarkBackground>
    </A>
  );
}

export default AnchorTemplate;
