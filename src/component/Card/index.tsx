import React from "react";
import {
  CardBlock,
  RequestInfo,
  CardTitle,
  CustomerName,
  HopeDueDate,
  DetailDescGroup,
  RequestDrawingGroup,
  RequestDrawingDesc,
  RequestDrawingCount,
  TotalQuantityGroup,
  TotalQuantityDesc,
  TotalQuantityCount,
  ProcessingGroup,
  ProcessingDesc,
  ProcessingDetail,
  MaterialGroup,
  MaterialDesc,
  MaterialDeatil,
  BtnGroup,
  StyledButton,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { PostList } from "../../lib/slice/postSlice";
import { IPostItem } from "../../typings/db";
import { FC } from "react";

interface CardProps {
  PostItem: IPostItem;
}
const Card: FC<CardProps> = ({ PostItem }) => {
  // const dispatch = useDispatch();
  console.log("dd", PostItem);
  return (
    <CardBlock>
      <RequestInfo>
        <CardTitle>{PostItem.title}</CardTitle>
        <CustomerName>{PostItem.client}</CustomerName>
        <HopeDueDate>{PostItem.due}까지 납기</HopeDueDate>
      </RequestInfo>
      <DetailDescGroup>
        <RequestDrawingGroup>
          <RequestDrawingDesc>도면개수</RequestDrawingDesc>
          <RequestDrawingCount>{PostItem.count}개</RequestDrawingCount>
        </RequestDrawingGroup>
        <TotalQuantityGroup>
          <TotalQuantityDesc>총 수량</TotalQuantityDesc>
          <TotalQuantityCount>{PostItem.amount}개</TotalQuantityCount>
        </TotalQuantityGroup>
        <ProcessingGroup>
          <ProcessingDesc>가공 방식</ProcessingDesc>
          <ProcessingDetail>{PostItem.method.join(", ")}</ProcessingDetail>
        </ProcessingGroup>
        <MaterialGroup>
          <MaterialDesc>재료</MaterialDesc>
          <MaterialDeatil>{PostItem.material.join(", ")}</MaterialDeatil>
        </MaterialGroup>
      </DetailDescGroup>
      <BtnGroup>
        <StyledButton>
          <p>요청 내역 보기</p>
        </StyledButton>
        <StyledButton primary>
          <p>채팅 하기</p>
        </StyledButton>
      </BtnGroup>
    </CardBlock>
  );
};

export default Card;
