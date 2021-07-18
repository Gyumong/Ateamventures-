import React from "react";
import { NavBlock, NavDescBlock, NavDescName, NavDescSlash, NavDescUserBtn, NavMenuIcon, NavTitle } from "./styles";
import { BsList } from "react-icons/bs";

const Nav = () => {
  return (
    <NavBlock>
      <NavMenuIcon>
        <BsList style={{ color: "white", width: "18px" }} />
      </NavMenuIcon>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <NavTitle>
          <strong>CAPA</strong> 파트너스
        </NavTitle>
        <NavDescBlock>
          <NavDescName>A 가공업체</NavDescName>
          <NavDescSlash></NavDescSlash>
          <NavDescUserBtn>로그아웃</NavDescUserBtn>
        </NavDescBlock>
      </div>
    </NavBlock>
  );
};

export default Nav;
