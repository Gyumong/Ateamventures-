import styled from "styled-components";

export const DashBoardLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  @media (min-width: 720px) {
    padding: 40px 155px;
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

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  @media (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const BtnGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  position: relative;
  margin-bottom: 20px;
  h4 {
    cursor: pointer;
    color: #2196f3;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
  }
  @media (min-width: 720px) {
    margin: 0;
  }
`;

export const SelectBtn = styled.div<{ smail?: boolean; isChecked?: boolean }>`
  display: flex;
  background-color: ${(props) => (props.isChecked ? "#1565C0" : "white")};
  color: ${(props) => (props.isChecked ? "white" : "black")};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4px 12px;
  width: ${(props) => (props.smail ? "90px" : "110px")};
  height: 32px;
  border: 1px solid #939fa5;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    border-color: #2196f3;
  }
`;

export const SelectBtnText = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 14.06;
`;

export const SelectModal = styled.div`
  z-index: 100;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 130px;
  padding: 17px 12px;
  background-color: white;
  top: 34px;
  left: 1px;
  border: 1px solid #939fa5;
  box-sizing: border-box;
  border-radius: 4px;
  p {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    :last-child {
      margin: 0;
    }
  }
  input {
    margin-right: 10px;
  }
  label {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const SelectNextModal = styled(SelectModal)`
  top: 34px;
  left: 105px;
`;
export const ConsultingToggleGroup = styled.div`
  display: flex;
  align-items: center;

  width: 190px;
  flex-wrap: nowrap;
`;

export const ConsultingToggleDesc = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
`;
