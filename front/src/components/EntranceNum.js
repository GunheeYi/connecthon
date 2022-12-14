import React from "react";
import styled from "styled-components";
import palette from "../styles/pallete";

const EntranceNumStyle = styled.div`
  border-radius: 55px;
  width: 39px;
  height: 27px;
  // padding: 5px 9px 6px 8px;
  background-color: ${palette.sub_purple_2};

  // font
  display: flex;
  color: ${palette.main_purple};
  align-items: center;
  justify-content: center;
  font-family: "Pretendard Bold";
  font-size: 13px;

  display: flex;
  margin-right: auto;

  position: absolute;
  z-index: 1;
`;

const EntranceNum = ({ text }) => {
  return <EntranceNumStyle>{text}</EntranceNumStyle>;
};

export default EntranceNum;
