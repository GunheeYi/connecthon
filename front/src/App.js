import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { Home, Login, Register, Error, Navbar, Mypage } from ".";

function App() {
	const [userDt, setUserDt] = useState({
		logined: false,
		name: "",
	});
	const logout = () => {
		setUserDt({
			...userDt,
			logined: false,
			name: "",
		});
	};
	return (
		<div className="App">
			<Navbar userDt={userDt} logout={logout} />
			<div id="page">
				{userDt.logined ? (
					<Routes id="page-login-true">
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/mypage" element={<Mypage />} />
						<Route
							path="*"
							element={
								<Error code={404} message="Page not found" />
							}
						/>
					</Routes>
				) : (
					<Routes id="page-login-false">
						<Route path="/register" element={<Register />} />
						<Route
							path="/login"
							element={
								<Login userDt={userDt} setUserDt={setUserDt} />
							}
						/>
						<Route path="/*" element={<Navigate to="/login" />} />
					</Routes>
				)}
			</div>
		</div>
	);
}

export default App;

