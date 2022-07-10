import React from "react";
import { Color } from "../../apis/ditto/dtos";
import * as Styled from "./styles";

interface TabProps {
  tab: "about" | "stats" | "evolution";
  onClick: (tab: "about" | "stats" | "evlution") => void;
  color?: Color;
}
const Tabs: React.FC<TabProps> = ({ tab, onClick, color }) => {
  return (
    <List>
      <ListItem onClick={() => onClick("about")}>
        <TabButton active={tab === "about"} color={mapColorToHex(color?.name)}>
          About
        </TabButton>
      </ListItem>
      <ListItem onClick={() => onClick("stats")}>
        <TabButton active={tab === "stats"} color={mapColorToHex(color?.name)}>
          Stats
        </TabButton>
      </ListItem>
      <ListItem onClick={() => onClick("evolution")}>
        <TabButton
          active={tab === "evolution"}
          color={mapColorToHex(color?.name)}
        >
          Evolution
        </TabButton>
      </ListItem>
    </List>
  );
};

export default Tabs;
