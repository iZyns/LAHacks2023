import logo from './logo.svg';
import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import Chat from './pages/chat';

function App() {
  const navigate = useNavigate();

  const homeRedir = () => {
    navigate("/home");
  };

  const loginRedir = () => {
    navigate("/");
  };

  const signupRedir = () => {
    navigate("/signup");
  };

  const chatRedir = () => {
    navigate("/chatRoom");
  };

  return (
    <div className="App">
      {/* Header & buttons */}
      <button type="button" onClick={homeRedir}><h1> LAHacks Project </h1></button>
      <button type="button" onClick={loginRedir}>Login</button>
      <button type="button" onClick={signupRedir}>Sign Up</button>
      <button type="button" onClick={chatRedir}>Chat Test</button>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chatRoom" element={<Chat />} />
      </Routes>
    </div>    
  );
}

export default App;
