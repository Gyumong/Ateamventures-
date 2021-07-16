import styled from "styled-components";
import App from "./../../App";

export const NavBlock = styled.div`
  width: 100%;
  height: 44px;
  background-color: #1565c0;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  @media (max-width: 720px) {
    display: flex;
    font-size: 20px;
    padding: 16px 23px;
  }
`;

export const NavMenuIcon = styled.svg`
  display: none;
  @media (max-width: 720px) {
    display: flex;
    font-size: 20px;
    width: 24px;
    height: 24px;
    margin-right: 1px;
  }
`;

export const NavTitle = styled.h1`
  color: white;
  strong {
    font-weight: 700;
  }
  @media (max-width: 720px) {
    font-size: 12px;
    font-weight: 300;
  }
`;
