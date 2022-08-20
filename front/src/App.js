import { useState, useEffect } from "react";

import Login from "./components/Login";
import Home from "./components/Home";
import firebase from "./services/firebase";

import Button from "./components/Button";
import EmptyRow from "./components/EmptyRow";
import EntranceNum from "./components/EntranceNum";
import GlobalStyle from "./styles/GlobalStyle";
import ModalPage from "./pages/ModalPage";

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
      <GlobalStyle />
      {/* {user ? <Home user={user} /> : <Login />} */}
      <ModalPage />
      {/* <Button>시작하기</Button>
      <EntranceNum text={"4-2"} /> */}
    </div>
  );
}

export default App;
