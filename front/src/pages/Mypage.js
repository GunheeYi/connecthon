import React from "react";
import styled from "styled-components";
import { auth } from "../services/firebase";
import palette from "../styles/pallete";
import Train from "../components/Train";
import Station from "../components/Station";
import { Link } from "react-router-dom";
import Button from "../components/Button";

import "./Mypage.css";

const HorizontalFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Header = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${palette.black};
  margin: 7px 0;
`;

const PurpleStyle = styled.span`
  color: ${palette.main_purple};
`;

const FillSpace = styled.div`
  flex: auto;
`;
const BelowFloat = styled.div`
  position: absolute;
  top: 680px;
  z-index: 2;
`;

const Mypage = ({ user }) => {
  const isSeat = false;
  return (
    <div className="my-page">
      <img
        src={user ? user.photoURL : localStorage.getItem("photoURL")}
        alt=""
      />
      <div className="my-page-name">
        <div style={{ color: palette.black }}>
          {user ? user.displayName : localStorage.getItem("displayName")}
          <span> | </span>
        </div>
        <img id="navbar-logo-img" src="Frame 440.png" alt="logo" />
        <div style={{ color: palette.main_purple }}>
          <span>3</span>
        </div>
      </div>

      <div id="blank">
        <HorizontalFlex>
          <Header>
            현재 <PurpleStyle>내 자리</PurpleStyle>
          </Header>
        </HorizontalFlex>
      </div>
      <div id="my-page-seat">
        {isSeat ? (
          <div id="my-content">
            <Station /> 외선순환 4-2번 칸 5번 좌석
          </div>
        ) : (
          <div id="my-content2">
            현재 자리에 앉아 있지 않습니다!
            <Link to="/sit">
              <Button box_shadow>자리 등록하기</Button>
            </Link>
          </div>
        )}
      </div>

      <button className="button-signout" onClick={() => auth.signOut()}>
        로그아웃하기
      </button>
    </div>
  );
};

export default Mypage;
