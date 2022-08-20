import React from "react";
import palette from "../styles/pallete";
import styled from "styled-components";
import TriIcon from "../styles/img/tri_icon.svg";

const StyledDiv2 = styled.div`
  width: 55px;
  height: 45px;
  padding-top: 15px;
  // 정렬
  position: absolute;
  align-items: center;
  justify-content: center;
  display: flex;

  // font
  font-family: "Pretendard Bold";
  color: ${palette.white};
`;
const StyledImg = styled.img`
  // 정렬
  position: absolute;
`;
const CustomIcon = ({ txt }) => {
  return (
    <>
      <StyledImg src={TriIcon} alt="error" />
      <StyledDiv2>{txt}</StyledDiv2>
    </>
  );
};

export default CustomIcon;
