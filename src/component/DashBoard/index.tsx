import React from "react";
import {
  DashBoardLayout,
  DashBoardTitleGroup,
  DasBoardTitle,
  DasBoardDesc,
  FilterGroup,
  BtnGroup,
  SelectBtn,
  SelectBtnText,
  SelectModal,
  ConsultingToggleGroup,
  ConsultingToggleDesc,
} from "./styles";
import { IoMdArrowDropdown } from "react-icons/io";
import Switch from "@material-ui/core/Switch";
import Card from "../Card";
const DashBoard = () => {
  return (
    <DashBoardLayout>
      <DashBoardTitleGroup>
        <DasBoardTitle>들어온 요청</DasBoardTitle>
        <DasBoardDesc>파트너님에게 딱 맞는 요청서를 찾아보세요.</DasBoardDesc>
      </DashBoardTitleGroup>
      <FilterGroup>
        <BtnGroup>
          <SelectBtn>
            <SelectBtnText>가공방식</SelectBtnText>
            <IoMdArrowDropdown style={{ fontSize: "20px" }} color={"#939FA5"} />
          </SelectBtn>
          <SelectBtn smail>
            <SelectBtnText>재료</SelectBtnText>
            <IoMdArrowDropdown style={{ fontSize: "20px" }} color={"#939FA5"} />
          </SelectBtn>
          <SelectModal style={{ display: "none" }}>
            <p>
              <input type="checkbox" />
              <label>일정</label>
            </p>
            <p>
              <input type="checkbox" />
              <label>선반</label>
            </p>
          </SelectModal>
        </BtnGroup>
        <ConsultingToggleGroup>
          <Switch color="primary" />
          <ConsultingToggleDesc>상담 중인 요청만 보기</ConsultingToggleDesc>
        </ConsultingToggleGroup>
      </FilterGroup>
      <Card />
    </DashBoardLayout>
  );
};

export default DashBoard;
