import React, { useState } from "react";
import palette from "../styles/pallete";
import Seat from "./Seat";
import SeatButton from "./SeatButton";

function SeatGroupButton(props) {
  // const seat2seat = props.big ? 6 : 3;
  const side2side = props.big ? 30 : 12;
  const front2front = props.big ? 24 : 10;

  console.log(props);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: front2front,
        flexDirection: "column",
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "center", gap: side2side }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          {Array.from({ length: 3 }, (_, i) => i + 1).map((i, key) => (
            <SeatButton
              key={key}
              seatNum={props.seatNum}
              big={props.big}
              inverted={false}
              num={i}
              setSeatHandler={props.setSeatHandler}
            />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {Array.from({ length: 3 }, (_, i) => i + 4).map((i, key) => (
            <SeatButton
              key={key}
              seatNum={props.seatNum}
              big={props.big}
              inverted={false}
              num={i}
              setSeatHandler={props.setSeatHandler}
            />
          ))}
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", gap: side2side }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          {Array.from({ length: 3 }, (_, i) => i + 7).map((i, key) => (
            <SeatButton
              key={key}
              seatNum={props.seatNum}
              big={props.big}
              inverted={true}
              num={i}
              setSeatHandler={props.setSeatHandler}
            />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {Array.from({ length: 3 }, (_, i) => i + 10).map((i, key) => (
            <SeatButton
              key={key}
              seatNum={props.seatNum}
              big={props.big}
              inverted={true}
              num={i}
              setSeatHandler={props.setSeatHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SeatGroupButton;
