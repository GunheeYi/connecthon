import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import firebase from "./firebase";
import { Home, Login, Register, Error, Navbar, Mypage, GoogleLogin } from ".";

function App() {
	const [user, setUser] = useState(null);
	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			setUser(user);
		});
	}, []);

	console.log(user);
	return (
		<div className="App">
			<Navbar user={user} />
			<div id="page">
				{user ? (
					<Routes id="page-login-true">
						<Route path="/" element={<Home user={user} />} />
						<Route path="/home" element={<Home user={user} />} />
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
						<Route path="/login" element={<GoogleLogin />} />
						<Route path="/*" element={<Navigate to="/login" />} />
					</Routes>
				)}
			</div>
		</div>
	);
}

export default App;
