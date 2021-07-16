import styled from "styled-components";
import App from "./../../App";

export const NavBlock = styled.div`
  width: 100%;
  height: 44px;
  background-color: #1565c0;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  display: flex;
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

export const NavTitle = styled.h1`
  color: white;
  font-size: 12px;
  font-weight: 300;
  strong {
    font-weight: 700;
  }
  @media (min-width: 720px) {
  }
`;
