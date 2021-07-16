import React from "react";
import { DashBoardLayout, DashBoardTitleGroup, DasBoardTitle, DasBoardDesc } from "./styles";
const DashBoard = () => {
  return (
    <DashBoardLayout>
      <DashBoardTitleGroup>
        <DasBoardTitle>들어온 요청</DasBoardTitle>
        <DasBoardDesc>파트너님에게 딱 맞는 요청서를 찾아보세요.</DasBoardDesc>
      </DashBoardTitleGroup>
    </DashBoardLayout>
  );
};

export default DashBoard;
