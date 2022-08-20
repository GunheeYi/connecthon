import React from "react";
import styled from "styled-components";
import palette from "../styles/pallete";
import EntranceNum from "./EntranceNum";
import SeatGroup from "./SeatGroup";

const EmptyRowStyle = styled.div`
  margin: 5px 0;
  width: 334px;
  height: 88px;
  // background-color: white;

  // 정렬
  display: flex;
  align-items: center;
  position: relative;
`;

const SubInfoStyle = styled.div`
  width: 314px;
  height: 88px;
  border-radius: 16px;
  border: 1px solid ${palette.gray_3};
  background-color: ${palette.white};

  // 정렬
  position: relative;
  margin-left: auto;
`;

const UserStyle = styled.div`
  position: absolute;
  left: 36px;
  top: 25px;
  font-size: 12px;
  font-weight: bold;
  color: ${palette.gray_1};
`;

const UnboardingStyle = styled.div`
  position: absolute;
  left: 36px;
  top: 45px;
  font-size: 19px;
  font-weight: bold;
  color: ${palette.black};
`;

const PurpleStyle = styled.span`
  color: ${palette.main_purple};
`;

const SeatGroupStyle = styled.div`
  position: absolute;
  left: 182px;
  top: 19px;
`;

const EmptyRow = (props) => {
  return (
    <EmptyRowStyle>
      <EntranceNum text={props.locked ? "" : props.door} />
      <SubInfoStyle>
        <UserStyle>{props.locked ? "▇▇▇" : `${props.user}님`}</UserStyle>
        <UnboardingStyle>
          <PurpleStyle>
            {props.locked
              ? "▇▇▇▇"
              : props.remaining > 0
              ? props.remaining + "정거장 뒤"
              : "해당 역"}
          </PurpleStyle>{" "}
          {props.locked ? "▇▇" : "하차"}
        </UnboardingStyle>
        <SeatGroupStyle>
          <SeatGroup big={false} seat={props.locked ? 0 : props.seat} />
        </SeatGroupStyle>
      </SubInfoStyle>
    </EmptyRowStyle>
  );
};

export default EmptyRow;
