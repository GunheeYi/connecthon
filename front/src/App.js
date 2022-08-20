import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Home, Login, Error, Navbar, Mypage } from '.';
import Button from './components/Button';
import EntranceNum from './components/EntranceNum';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  return (
    <div>
      <GlobalStyle />
      <EntranceNum text={'4-2'} />
      {/* <Button gray>시작하기</Button> */}
    </div>

    // <div className="App">
    //   <Navbar isLoggedIn={isLoggedIn} isPaid={isPaid} usrName={"이유림"} />
    //   <div id="page">
    //     {isLoggedIn ? (
    //       <Routes id="page-login-true">
    //         <Route path="/" element={<Home />} />
    //         <Route path="/home" element={<Home />} />
    //         <Route path="/mypage" element={<Mypage />} />
    //         <Route
    //           path="*"
    //           element={<Error code={404} message="Page not found" />}
    //         />
    //       </Routes>
    //     ) : (
    //       <Routes id="page-login-false">
    //         <Route path="/login" element={<Login />} />
    //         <Route path="/*" element={<Navigate to="/login" />} />
    //       </Routes>
    //     )}
    //   </div>
    // </div>
  );
}

export default App;
