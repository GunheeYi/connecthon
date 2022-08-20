import "./App.css";

import { useState, useEffect } from "react";
import { Route, Nav, useParams, Router, Switch } from "react-router-dom";

import firebase from "./services/firebase";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import Navbar from "./Navbar";

import Button from "./components/Button";
import EmptyRow from "./components/EmptyRow";
import EntranceNum from "./components/EntranceNum";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			setUser(user);
		});
	}, []);

	console.log(user);

	return (
		<div className="app">
			{user ? (
				<div id="navbar">
					<Navbar user={user} />
				</div>
			) : null}
			<GlobalStyle />
			{user ? (
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/home" component={Home} />
					<Route
						exact
						path="/mypage"
						render={() => <Mypage user={user} />}
					/>
				</Switch>
			) : (
				<Switch>
					<Route exact path="/*" component={Login} />
					<Route exact path="/login" component={Login} />
				</Switch>
			)}
		</div>
	);
}

export default App;
