import React from "react";
import { Color } from "../../apis/ditto/dtos";
import { mapColorToHex } from "../../utils";
import * as Styled from "./styles";

interface TabProps {
  tab: "about" | "stats" | "evolution";
  onClick: (tab: "about" | "stats" | "evolution") => void;
  color?: Color;
}
const Tabs: React.FC<TabProps> = ({ tab, onClick, color }) => {
  return (
    <Styled.List>
      <Styled.ListItem onClick={() => onClick("about")}>
        <Styled.TabButton active={tab === "about"} color={mapColorToHex(color?.name)}>
          About
        </Styled.TabButton>
      </Styled.ListItem>
      <Styled.ListItem onClick={() => onClick("stats")}>
        <Styled.TabButton active={tab === "stats"} color={mapColorToHex(color?.name)}>
          Stats
        </Styled.TabButton>
      </Styled.ListItem>
      <Styled.ListItem onClick={() => onClick("evolution")}>
        <Styled.TabButton
          active={tab === "evolution"}
          color={mapColorToHex(color?.name)}
        >
          Evolution
        </Styled.TabButton>
      </Styled.ListItem>
    </Styled.List>
  );
};

export default Tabs;
