import styled from "styled-components";

interface StyledButtonProps {
  primary?: boolean;
}

export const CardBlock = styled.div`
  width: 100%;
  max-width: 366px;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 16px;
  :last-child {
    margin: 0;
  }
  &:hover {
    border: 2px solid #2196f3;
  }
`;

export const RequestInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0px;
  border-bottom: 1px solid #e5e5e5;
`;

export const CardTitle = styled.div`
  color: #323d45;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-bottom: 4px;
`;

export const CustomerName = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #323d45;
  margin-bottom: 24px;
`;

export const HopeDueDate = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #939fa5;
  margin-bottom: 16px;
`;

export const DetailDescGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 0px;
`;

const RequestGroup = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 8px;
`;
export const RequestDrawingGroup = styled(RequestGroup)``;
export const TotalQuantityGroup = styled(RequestGroup)``;
export const ProcessingGroup = styled(RequestGroup)``;
export const MaterialGroup = styled(RequestGroup)`
  margin: 0;
`;

const RequestDesc = styled.div`
  width: 70px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #323d45;
  margin-right: 32px;
`;

export const RequestDrawingDesc = styled(RequestDesc)``;
export const TotalQuantityDesc = styled(RequestDesc)``;
export const ProcessingDesc = styled(RequestDesc)``;
export const MaterialDesc = styled(RequestDesc)``;

const RequestCount = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
`;

export const RequestDrawingCount = styled(RequestCount)``;
export const TotalQuantityCount = styled(RequestCount)``;
export const ProcessingDetail = styled(RequestCount)``;
export const MaterialDeatil = styled(RequestCount)``;

export const BtnGroup = styled.div`
  display: flex;
  max-width: 200px;
  justify-content: space-between;
  flex: none;
  order: 2;
  flex-grow: 0;
  :first-child {
    margin-right: 8px;
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  text-align: center;
  padding: 6px 12px;
  font-weight: 500;
  font-size: 14px;
  font-family: Noto Sans KR;
  line-height: 20px;
  border-radius: 4px;
  background-color: ${(props) => (props.primary ? "#2196F3" : "white")};
  border: ${(props) => (props.primary ? "white" : "1px solid #2196F3")};
  border-radius: 4px;
  p {
    color: ${(props) => (props.primary ? "white" : "#2196F3")};
  }
`;
