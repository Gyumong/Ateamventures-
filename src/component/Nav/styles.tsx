import styled from "styled-components";

export const NavBlock = styled.div`
  width: 100%;
  height: 44px;
  background-color: #1565c0;
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

export const NavTitle = styled.h1`
  color: white;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 12px;
  font-weight: 300;
  strong {
    font-weight: 700;
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
