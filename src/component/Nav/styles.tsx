import styled, { css } from "styled-components";

interface SliderProps {
  on?: boolean;
}

export const NavBlock = styled.div<SliderProps>`
  width: 100%;
  height: 44px;
  background-color: ${(props) => (props.on ? "white" : "#1565c0")};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  align-items: center;
  font-size: 20px;
  padding: 16px 23px;
  @media (min-width: 720px) {
  }
`;

export const NavMenuIcon = styled.svg`
  display: flex;
  font-size: 20px;
  width: 24px;
  height: 24px;
  margin-right: 1px;
  @media (min-width: 720px) {
    display: none;
  }
`;

export const NavTitle = styled.h1<SliderProps>`
  color: ${(props) => (props.on ? "#2196F3" : "white")};
  z-index: ${(props) => (props.on ? "200" : "0")};
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 12px;
  font-weight: 300;
  strong {
    font-weight: 700;
    z-index: 200;
  }
  @media (min-width: 720px) {
  }
`;

export const NavDescBlock = styled.div`
  width: 200px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  @media (max-width: 720px) {
    display: none;
  }
`;

export const NavDescName = styled.div``;
export const NavDescUserBtn = styled.div``;
export const NavDescSlash = styled.div`
  border: 1px solid #ffffff;
  height: 100%;
  color: white;
  background-color: white;
`;

export const SliderBlock = styled.div<SliderProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${(props) => (props.on ? "200" : "0")};
  transition: all 250ms ease-in;
  background-color: ${(props) => (props.on ? "rgba(0, 0, 0, 0.6)" : "none")};
`;
export const Slider = styled.div<SliderProps>`
  width: 70%;
  position: absolute;
  left: -100%;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  transition: all 250ms ease-in;
  ${(props) =>
    props.on &&
    css`
      left: 0;
    `};
`;

export const SliderContentBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 36px 32px;
`;

export const SliderContent = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #323d45;
  margin-bottom: 24px;
`;
