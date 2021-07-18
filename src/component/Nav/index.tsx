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
  SliderContentBlock,
  SliderContent,
} from "./styles";
import { BsList } from "react-icons/bs";

const Nav = () => {
  const [state, setState] = useState(false);
  return (
    <NavBlock on={state}>
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

      <SliderBlock onClick={() => setState((prev) => !prev)} on={state}>
        <Slider on={state} onClick={(e) => e.stopPropagation()}>
          <NavBlock on={state}>
            <NavTitle on={state}>
              <strong>CAPA</strong> 파트너스
            </NavTitle>
          </NavBlock>
          <SliderContentBlock>
            <SliderContent>파트너정밀가공</SliderContent>
            <SliderContent>로그아웃</SliderContent>
          </SliderContentBlock>
        </Slider>
      </SliderBlock>
    </NavBlock>
  );
};

export default Nav;
