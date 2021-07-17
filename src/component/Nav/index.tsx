import React from "react";
import { NavBlock, NavMenuIcon, NavTitle } from "./styles";
import { BsList } from "react-icons/bs";

const Nav = () => {
  return (
    <NavBlock>
      <NavMenuIcon>
        <BsList style={{ color: "white", width: "18px" }} />
      </NavMenuIcon>
      <NavTitle>
        <strong>CAPA</strong> 파트너스
      </NavTitle>
    </NavBlock>
  );
};

export default Nav;
