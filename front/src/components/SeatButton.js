import { React, useState, useEffect } from "react";
import palette from "../styles/pallete";

{
  /* <Seat occupied="true" big="true" showNum="true" num="12"/> */
}

function SeatButton(props) {
  const handleClick = () => {
    props.setSeatHandler(props.num);
  };

  const toggle = props.num === props.seatNum;
  // const toggle = false;

  if (props.big) {
    return (
      <button
        onClick={handleClick}
        style={{
          position: "relative",
          width: 50,
          height: 50,
          display: "flex",
          border: "none",
          backgroundColor: palette.white,
        }}
      >
        <div
          style={{
            position: "relative",
            width: 40,
            height: 40,
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              position: "absolute",
              border:
                "1px solid " + (toggle ? palette.sub_purple : palette.gray_2),
              backgroundColor: toggle ? palette.main_purple : palette.gray_4,
            }}
          ></div>
          <div
            style={{
              width: 40,
              height: 16,
              borderRadius: 8,
              position: "absolute",
              top: props.inverted ? 24 : 0,
              border:
                "1px solid " + (toggle ? palette.sub_purple : palette.gray_2),
              backgroundColor: toggle ? palette.main_purple : palette.gray_4,
            }}
          ></div>
          <div
            style={{
              width: props.num >= 10 ? "105%" : "110%",
              textAlign: "center",
              position: "absolute",
              top: props.inverted ? 6 : 18,
            }}
          >
            <div
              style={{
                display: "inline-block",
                fontFamily: "Pretendard SemiBold",
                color: toggle ? palette.white : palette.gray_1,
              }}
            >
              {props.num}
            </div>
          </div>
        </div>
      </button>
    );
  }
  return (
    <button
      onClick={handleClick}
      style={{ position: "relative", width: 50, height: 50 }}
    >
      <div
        style={{
          width: 14,
          height: 14,
          borderRadius: 3,
          backgroundColor: toggle ? palette.main_purple : palette.gray_4,
        }}
      ></div>
    </button>
  );
}

export default SeatButton;
