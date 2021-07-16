import styled from "styled-components";

interface SelectBtnType {
  smail?: boolean;
}
export const DashBoardLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  padding-left: 20px;
  @media (min-width: 720px) {
  }
`;

export const DashBoardTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  @media (min-width: 720px) {
  }
`;

export const DasBoardTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  font-weight: 700;
  color: #323d45;
`;

export const DasBoardDesc = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #323d45;
`;

export const BtnGroup = styled.div`
  display: flex;
  justify-content: space-around;
  width: 182px;
  position: relative;
`;

export const SelectBtn = styled.div<SelectBtnType>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 12px;
  width: ${(props) => (props.smail ? "76px" : "98px")};
  height: 32px;
  border: 1px solid #939fa5;
  box-sizing: border-box;
  border-radius: 4px;
  &:hover {
    border-color: #2196f3;
  }
`;

export const SelectBtnText = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 14.06;
`;

export const SelectBtnArrow = styled.div``;
