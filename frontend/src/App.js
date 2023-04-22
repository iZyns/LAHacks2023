import logo from './logo.svg';
import React from 'react'
import './App.css';

function App() {
  const loginRedir = () => {
    //TODO: Redirect to login page
  };

  const signupRedir = () => {
    //TODO: Redirect to login page
  };

  return (
    // Header & buttons
    <div className="App">
      <h1> LAHacks Project </h1>
      <button type="button" onClick={loginRedir}>Login</button> <button type="button" onclick={signupRedir}>Sign Up</button>
    </div>
  );
}

export default App;
