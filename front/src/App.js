import { useState, useEffect } from "react";

import Login from "./components/Login";
import Home from "./components/Home";
import firebase from "./services/firebase";

import Button from "./components/Button";
import EmptyRow from "./components/EmptyRow";
import EntranceNum from "./components/EntranceNum";
import Seat from "./components/Seat";
import SeatGroup from "./components/SeatGroup";
import Train from "./components/Train";
import Autocomplete from "./components/Autocomplete";
import Station from "./components/Station";
import GlobalStyle from "./styles/GlobalStyle";
import ModalPage from "./pages/ModalPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="app">
      <GlobalStyle />
      {user ? <Home user={user} /> : <Login />}

      <Button>시작하기</Button>
      <EntranceNum text={"4-2"} />
      <Seat occupied={true} big={true} num="12" />
      <Seat occupied={false} big={true} num="" />
      <Seat occupied={true} big={false} num="12" />
      <Seat occupied={false} big={false} num="12" />
      <Train line="2" name="외선순환" description="2분 40초 뒤 도착" />
      <Train line="2" name="외선순환" description="" />

      <Autocomplete />
      <Station name="당산" />
      <Station name="홍대" />
      <Station name="한양대" />
      <Station name="서울대입구" />

      {/* <SeatGroup seat={12} /> */}

      <ModalPage />
    </div>
  );
}

export default App;
