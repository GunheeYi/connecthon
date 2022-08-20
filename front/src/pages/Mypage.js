import React from "react";

import { auth } from "../services/firebase";
import palette from "../styles/pallete";

import "./Mypage.css";

const Mypage = ({ user }) => {
<<<<<<< Updated upstream
=======
	const isSeat = true;
>>>>>>> Stashed changes
	return (
		<div className="my-page">
			<img src={user.photoURL} alt="" />

			<div className="my-page-name">
				<div style={{ color: palette.black }}>
					{user.displayName}
					<span> | </span>
				</div>
				<img id="navbar-logo-img" src="Frame 440.png" alt="logo" />
				<div style={{ color: palette.main_purple }}>
					<span>3</span>
				</div>
			</div>
<<<<<<< Updated upstream
=======
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

>>>>>>> Stashed changes
			<button className="button-signout" onClick={() => auth.signOut()}>
				로그아웃하기
			</button>
		</div>
	);
};

export default Mypage;
