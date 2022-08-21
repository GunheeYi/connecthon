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
      console.log(user);
      localStorage.setItem("uid", user._delegate.uid);
      localStorage.setItem("photoURL", user.photoURL);
      localStorage.setItem("displayName", user.displayName);
      setUser(user);
    });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("uid")) {
      // api
      const uid = localStorage.getItem("uid");
      const url = "user/token?token=" + uid;
      // console.log(url);

      client
        .get(url)
        .then(function (res) {
          console.log(res.data.result.humanId);
          localStorage.setItem("user_Id", res.data.result.humanId);
        })
        .catch(function (err) {
          console.log(err);
        });
      //localStorage.setItem("user_Id", 5);
    }
  }, []);

  return (
    <div className="app" id="app">
      {localStorage.getItem("uid") ? (
        <div id="navbar">
          <Navbar user={user} />
        </div>
      ) : null}
      <GlobalStyle />
      {localStorage.getItem("uid") ? (
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
