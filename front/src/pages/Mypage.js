import React from "react";

import { auth } from "../services/firebase";
import palette from "../styles/pallete";

import "./Mypage.css";

const Mypage = ({ user }) => {
	return (
		<div className="my-page">
			<img src={user.photoURL} alt="" />
			<button className="button signout" onClick={() => auth.signOut()}>
				Sign out
			</button>
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
		</div>
	);
};

export default Mypage;
