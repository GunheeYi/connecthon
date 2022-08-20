import React from "react";
import Seat from "./Seat";

function SeatGroup({ seat }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 24,
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", gap: 30 }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 6 }}>
          {Array.from({ length: 3 }, (_, i) => i + 1).map((i, key) =>
            seat === i ? (
              <Seat
                key={key}
                occupied={true}
                big={true}
                inverted={false}
                num={i}
              />
            ) : (
              <Seat
                key={key}
                ccupied={false}
                big={true}
                inverted={false}
                num={i}
              />
            )
          )}
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 6 }}>
          {Array.from({ length: 3 }, (_, i) => i + 4).map((i, key) =>
            seat === i ? (
              <Seat
                key={key}
                occupied={true}
                big={true}
                inverted={false}
                num={i}
              />
            ) : (
              <Seat
                key={key}
                occupied={false}
                big={true}
                inverted={false}
                num={i}
              />
            )
          )}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 30 }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 6 }}>
          {Array.from({ length: 3 }, (_, i) => i + 7).map((i, key) =>
            seat === i ? (
              <Seat
                key={key}
                occupied={true}
                big={true}
                inverted={false}
                num={i}
              />
            ) : (
              <Seat
                key={key}
                occupied={false}
                big={true}
                inverted={false}
                num={i}
              />
            )
          )}
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 6 }}>
          {Array.from({ length: 3 }, (_, i) => i + 10).map((i, key) =>
            seat === i ? (
              <Seat
                key={key}
                occupied={true}
                big={true}
                inverted={false}
                num={i}
              />
            ) : (
              <Seat
                key={key}
                occupied={false}
                big={true}
                inverted={false}
                num={i}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default SeatGroup;
