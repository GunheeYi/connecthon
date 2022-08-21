import "./App.css";

import { useState, useEffect } from "react";
import { Route, Nav, useParams, Router, Switch } from "react-router-dom";

import firebase from "./services/firebase";
import Home from "./pages/Home";
import Sit from "./pages/Sit";
import Login from "./pages/Login";
import Test from "./pages/Test";
import Mypage from "./pages/Mypage";
import Navbar from "./Navbar";
import GlobalStyle from "./styles/GlobalStyle";
// api
import client from "./axiosConfing";

function App() {
  const [user, setUser] = useState(null);
  // axios post test
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      localStorage.setItem("accessToken", user._delegate.accessToken);
      setUser(user);
    });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      // api
      localStorage.setItem("user_Id", 5);
    }
  }, []);

  return (
    <div className="app" id="app">
      {localStorage.getItem("user") ? (
        <div id="navbar">
          <Navbar user={user} />
        </div>
      ) : null}
      <GlobalStyle />
      {localStorage.getItem("user") ? (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/sit" component={Sit} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/mypage" render={() => <Mypage user={user} />} />
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
