import React from "react";
import styled from "styled-components";
import palette from "../styles/pallete";
import EntranceNum from "./EntranceNum";

const EmptyRowStyle = styled.div`
  width: 334px;
  height: 88px;
  // background-color: white;

  // 정렬
  display: flex;
  align-items: center;
`;

const SubInfoStyle = styled.div`
  width: 314px;
  height: 88px;
  border-radius: 16px;
  border: 1px solid ${palette.light_gray_3};
  //background-color: ${palette.main_purple};

  // 정렬
  position: relative;
  margin-left: auto;
`;

const EmptyRow = () => {
  return (
    <EmptyRowStyle>
      <EntranceNum text="4-2" />
      <SubInfoStyle />
    </EmptyRowStyle>
  );
};

export default EmptyRow;
