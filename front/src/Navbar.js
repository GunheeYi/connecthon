import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar({ userDt, logout }) {
	return (
		<div className="Navbar">
			<div id="Navbar-title">
				<Link id="navbar-logo" to="/">
					<img id="navbar-logo-img" src="/logo.png" alt="logo" />
				</Link>
			</div>
			<div id="Navbar-menu">
				<div>
					<div className="Navbar-menu-item">
						<div
							className="Navbar-menu-item-title"
							onClick={logout}
						>
							로그아웃
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
