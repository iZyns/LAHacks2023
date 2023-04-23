import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './pages/Login Page/loginform'
import Chat from './pages/chat'
import Home from './pages/home'
import SignUp from './pages/signup'

function App() {
  return (
    <div className="App">
   
        <Routes>
          <Route index element={<LoginForm/>} />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/groups' element={<Chat/>} />
          <Route path='/signup' element={<SignUp/>} />
          
        </Routes>

    </div>    
  );
}

export default App;
