import A from "components/styled/a";
import ContactItemProps from "./ContactItemProps";

function AnchorTemplate({ href, icon, text }: ContactItemProps) {
  return (
    <A href={href} target="_blank">
      <div
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "end",
          paddingRight: "2px",
        }}
      >
        {icon}
      </div>
      <div style={{ width: "70%" }}>{text}</div>
    </A>
  );
}

export default AnchorTemplate;
