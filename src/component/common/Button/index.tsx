import { FC } from "react";
import { StyledButton } from "./styles";

interface BtnProps {
  primary?: boolean;
}

const Button: FC<BtnProps> = ({ primary }) => {
  return (
    <StyledButton primary>
      <p>버튼</p>
    </StyledButton>
  );
};

export default Button;
