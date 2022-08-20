import "./Login.css";
import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

function Button({ id, setUserDt, userDt }) {
	return (
		<button
			type="button"
			id="login-button"
			onClick={() => {
				if (id == "") {
					setUserDt({
						...userDt,
						logined: true,
						name: "딸기잼",
					});
				}
				console.log(userDt.logined);
				console.log(userDt.id);
			}}
		>
			로그인
		</button>
	);
}
function Login(props) {
	const [id, setId] = useState("");
	console.log(id);
	if (props.userDt.logined) {
		return <Navigate to={{ pathname: "/home" }} />;
	} else {
		return (
			<div className="login">
				<form id="login-info">
					<Button
						id={id}
						setUserDt={props.setUserDt}
						userDt={props.userDt}
					/>
				</form>
			</div>
		);
	}
}
export default Login;
