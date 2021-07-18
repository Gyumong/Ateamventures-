import React, { useState } from "react";
import {
  NavBlock,
  NavDescBlock,
  NavDescName,
  NavDescSlash,
  NavDescUserBtn,
  NavMenuIcon,
  NavTitle,
  SliderBlock,
  Slider,
} from "./styles";
import { BsList } from "react-icons/bs";

const Nav = () => {
  const [state, setState] = useState(false);
  return (
    <NavBlock>
      <NavMenuIcon onClick={() => setState((prev) => !prev)}>
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
      {state ? (
        <SliderBlock onClick={() => setState((prev) => !prev)}>
          <Slider on={state} onClick={(e) => e.stopPropagation()}></Slider>
        </SliderBlock>
      ) : null}
    </NavBlock>
  );
};

export default Nav;
