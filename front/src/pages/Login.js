import "./Login.css";
import { signInWithGoogle } from "../services/firebase";

const Login = () => {
	return (
		<div className="login">
			<div>
				<div className="text">우리가 함께 만들어나가는</div>
				<div className="text">지하철 자리 찾기</div>
				<br />
				<img src="/logo_white.png" alt="logo"></img>
			</div>

			<img
				className="google-signin-button"
				src="/google_login.png"
				alt="google"
				onClick={signInWithGoogle}
			></img>
		</div>
	);
};

export default Login;
