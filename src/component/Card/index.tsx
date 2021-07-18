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
  StatusMark,
  StatusMarkDesc,
  TitleBlock,
} from "./styles";
import { IPostItem } from "../../typings/db";
import { FC } from "react";

interface CardProps {
  PostItem: IPostItem;
}
const Card: FC<CardProps> = ({ PostItem }) => {
  // const dispatch = useDispatch();

  return (
    <CardBlock>
      <RequestInfo>
        <TitleBlock>
          <CardTitle>{PostItem.title}</CardTitle>
          {PostItem.status === "상담중" ? (
            <StatusMark>
              <StatusMarkDesc>상담중</StatusMarkDesc>
            </StatusMark>
          ) : null}
        </TitleBlock>
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
