import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar({ user }) {
	return (
		<div className="navbar">
			<div>
				<Link id="navbar-logo" to="/">
					<img src="/logo.png" alt="logo" />
				</Link>
			</div>
			<div id="navbar-menu-right">
				<Link to="/mypage" className="navbar-menu-item">
					<img src="/profile.png" alt="content" />
				</Link>
				<Link to="/mypage" className="navbar-menu-item">
					<img src="/alert.png" alt="content" />
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
