import styled from "styled-components";
import Button from "../components/Button";
import EmptyRow from "../components/EmptyRow";
import Train from "../components/Train";
import palette from "../styles/pallete";
import Clocks from "./Clock";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ModalSeat from "../components/ModalSeat";
import ModalReward from "../components/ModalReward";
import "./Home.css";
import { now, getRemaining } from "../services/metro";
import client from "../axiosConfing";

const VerticalFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const HorizontalFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FillSpace = styled.div`
  flex: auto;
`;

const Header = styled.span`
  font-size: 19px;
  font-weight: bold;
  color: ${palette.black};
  margin: 7px 0;
`;

const Description = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: ${palette.gray_1};
`;

const PurpleStyle = styled.span`
  color: ${palette.main_purple};
`;

const BelowFloat = styled.div`
  position: absolute;
  top: 680px;
  z-index: 2;
  width: 334px;
  height: 72px;
`;

const willEmpty = [
  { car: 4, door: 2, seat: 1, user: "사과잼", remaining: 1 },
  { car: 1, door: 3, seat: 2, user: "살구잼", remaining: 1 },
  { car: 8, door: 3, seat: 3, user: "카야잼", remaining: 2 },
  { car: 2, door: 2, seat: 4, user: "호두잼", remaining: 2 },
  { car: 5, door: 2, seat: 5, user: "호두잼", remaining: 3 },
  { car: 5, door: 2, seat: 6, user: "호두잼", remaining: 4 },
  { car: 5, door: 2, seat: 7, user: "호두잼", remaining: 4 },
  { car: 5, door: 2, seat: 8, user: "호두잼", remaining: 5 },
];

const Nav = styled.nav`
  display: flex;
  overflow: auto;
  height: 45px;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

function Home() {
  //let hasTicket = true;
  const [hasTicket, setHasTicket] = useState(false);

  const here = 230;

  const [isOpen, setOpen] = useState(false);
  const [car, setCar] = useState();
  const [door, setDoor] = useState();
  const [seat, setSeat] = useState();
  const [locked, setLocked] = useState(true);
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const r = getRemaining(here);
      setRemaining(r);
    }, 997);
  }, []);

  const isReward = false;
  const handleClick = (c, d, s) => {
    setCar(c);
    setDoor(d);
    setSeat(s);
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const unlock = () => {
    const user_Id = localStorage.getItem("user_Id");
    const url = "ticket/discount?userId=" + user_Id;

    client
      .get(url)
      .then(function (res) {
        console.log(res);
        setLocked(false);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("isTicket")) {
      console.log("test");
      setHasTicket(true);
      setLocked(false);
      localStorage.removeItem("isTicket");
    }
  }, []);

  useEffect(() => {
    const user_Id = localStorage.getItem("user_Id");
    const url = "user/ticket?userId=" + user_Id;

    client
      .get(url)
      .then(function (res) {
        if (res.data.result[0].tickets > 0) {
          setHasTicket(true);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <br />
      <HorizontalFlex>
        <Header>
          내가 <PurpleStyle>탈</PurpleStyle> 지하철은?
        </Header>
        <FillSpace />
        <Description>
          <Clocks />
        </Description>
        <Description>&nbsp;기준</Description>
      </HorizontalFlex>
      <Train
        name="외선순환"
        description={
          (remaining >= 60 ? `${parseInt(remaining / 60)}분 ` : "") +
          `${remaining % 60}초 뒤 도착`
        }
      />

      <br />

      <HorizontalFlex>
        <Header>
          <PurpleStyle>열차 자리</PurpleStyle>가 비기까지
        </Header>
      </HorizontalFlex>
      <div className="mostly-customized-scrollbar">
        {willEmpty.map(
          (item, i) => {
            return (
              <div key={i}>
                <div
                  id="row-data"
                  onClick={() => handleClick(item.car, item.door, item.seat)}
                >
                  <EmptyRow
                    door={item.car + "-" + item.door}
                    user={item.user}
                    remaining={item.remaining}
                    seat={item.seat}
                    locked={locked}
                  />
                </div>

                {isReward ? (
                  <ModalReward isOpen={isOpen} onCancel={handleCancel} />
                ) : (
                  <ModalSeat
                    isOpen={isOpen}
                    onCancel={handleCancel}
                    car={car}
                    door={door}
                    seat={seat}
                  />
                )}
              </div>
            );
          },
          [isOpen]
        )}
        <div className="rect" />
      </div>

      <BelowFloat>
        <HorizontalFlex>
          {hasTicket && locked ? (
            <>
              <Button box_shadow width={130} onClick={unlock}>
                열람권 사용
              </Button>
              <FillSpace></FillSpace>
            </>
          ) : (
            <></>
          )}
          <Link to="/sit">
            <Button box_shadow width={hasTicket && locked ? 190 : 334}>
              자리 등록하기
            </Button>
          </Link>
        </HorizontalFlex>
      </BelowFloat>
    </div>
  );
}

export default Home;
