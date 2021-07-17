import styled from "styled-components";

interface StyledButtonProps {
  primary?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  padding: 6px 12px;
  border-radius: 4px;
  background-color: ${(props) => (props.primary ? "#2196F3" : "white")};
  border: ${(props) => (props.primary ? "white" : "1px solid #2196F3")};
  border-radius: 4px;
  p {
    color: ${(props) => (props.primary ? "white" : "#2196F3")};
  }
`;
