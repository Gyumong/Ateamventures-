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

const Card = () => {
  return (
    <CardBlock>
      <RequestInfo>
        <CardTitle>프로젝트명</CardTitle>
        <CustomerName>고객사</CustomerName>
        <HopeDueDate>2020.12.14까지 납기</HopeDueDate>
      </RequestInfo>
      <DetailDescGroup>
        <RequestDrawingGroup>
          <RequestDrawingDesc>도면개수</RequestDrawingDesc>
          <RequestDrawingCount>2개</RequestDrawingCount>
        </RequestDrawingGroup>
        <TotalQuantityGroup>
          <TotalQuantityDesc>총 수량</TotalQuantityDesc>
          <TotalQuantityCount>100개</TotalQuantityCount>
        </TotalQuantityGroup>
        <ProcessingGroup>
          <ProcessingDesc>가공 방식</ProcessingDesc>
          <ProcessingDetail>밀링, 선반</ProcessingDetail>
        </ProcessingGroup>
        <MaterialGroup>
          <MaterialDesc>재료</MaterialDesc>
          <MaterialDeatil>알루미늄</MaterialDeatil>
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
