import React from "react";

import { auth } from "../services/firebase";
import palette from "../styles/pallete";

import "./Mypage.css";

const Mypage = ({ user }) => {
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
			<button className="button-signout" onClick={() => auth.signOut()}>
				로그아웃하기
			</button>
		</div>
	);
};

export default Mypage;
